import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { postRequest } from "../services/blog-service";
import Spinner from "../components/Spinner/Spinner";
import { Post } from "../@Types";
const PostDetails = () => {
    const { id } = useParams();
    const { isLoading, data: res } = useQuery("get-posts", postRequest);
    if (isLoading) {
        return <Spinner />;
    }
    const posts: Post[] = res?.data ?? [];
    const post = posts.find((p) => p.id.toString() === id);
    if (post) return <div>{post.title}</div>;
    return <div>No Such Post</div>;
};
export default PostDetails;