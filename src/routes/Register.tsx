import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Spinner from "../components/Spinner/Spinner";
import authService from "../services/auth-service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object({
    username: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{8,20}$/)
      .required(),
  });

  const intiailValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={intiailValues}
      onSubmit={({ username, email, password }) => {
        setLoading(true); //show progress spinner
        setError(undefined); //new round - clean slate
        authService
          .register(username, email, password)
          .then((res) => {
            Swal.fire({
              title: "Registered successfully",
              icon: "success",
              timer: 2000,
            });
            //navigate
            nav("/login");
          })
          .catch((e) => {
            console.log(e.response.data);
            setError(e.response.data.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      <Form>
        {loading && <Spinner title="" />}
        {error && (
          <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic shadow-md">
            {error}
          </p>
        )}
        <div className="bg-white shadow-md rounded-lg my-2 w-1/2 mx-auto p-4 flex flex-col gap-2">
          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="username">User name:</label>
            <Field
              className=" px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="username..."
              name="username"
              type="text"
              id="username"
            />
            {/* error message for the input */}
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-2 flex flex-col">
            <label htmlFor="email">Email address:</label>
            <Field
              className=" px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="email..."
              name="email"
              type="email"
              id="email"
            />
            {/* error message for the input */}
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="font-extralight text-lg my-2 form-group  gap-2 flex flex-col">
            <label htmlFor="password">Password:</label>
            <Field
              className=" px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="password..."
              name="password"
              type="password"
              id="password"
            />
            {/* error message for the input */}
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            disabled={loading}
            className="disabled:bg-fuchsia-700/50 rounded text-white px-3 py-2 w-full bg-fuchsia-700"
          >
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;
