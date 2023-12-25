import { ReactNode, createContext, useState } from "react";
import { Post } from "../@Types";

interface BlogContextState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

const initialState: BlogContextState = {
  posts: [],
  setPosts: () => {},
};

//create context
const BlogContext = createContext<BlogContextState>(initialState);

//wrapper component:
export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
