import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Posts from "./routes/Posts";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./routes/NotFound";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import PostDetails from "./routes/Posts";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* for non-logged-in-users */}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        <Route path="/login" element={<Login />} />

        {/* for logged-in users */}
        {isLoggedIn && <Route path="/posts" element={<Posts />} />}
        {isLoggedIn && <Route path="/posts/:id" element={<PostDetails />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
