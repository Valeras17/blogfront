import { useQuery } from "react-query";
import Spinner from "../components/Spinner/Spinner";
import { postRequest } from "../services/blog-service";
import { Link } from "react-router-dom";
import { Post } from "../@Types";
import { useContext, useEffect } from "react";
import BlogContext from "../context/BlogContext";

const Posts = () => {
  const { setPosts } = useContext(BlogContext);
  const { isLoading, data: res } = useQuery("get-posts", postRequest);

  useEffect(() => {
    //effect that runs once when the component is loaded
    //AND each time res changes
    if (res && res.data) {
      setPosts(res.data);
    }
  }, [res]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2 className="text-fuchsia-900 text-lg p-2 mt-2">Posts</h2>
      <hr />
      {res?.data.map((post: Post) => (
        <Link
          to={`/posts/${post.id}`}
          className="block cursor-pointer text-fuchsia-900 hover:text-fuchsia-500 my-2 rounded shadow-sm p-2"
          key={post.id}
        >
          <p>{post.title}</p>
        </Link>
      ))}
    </>
  );
};

export default Posts;
