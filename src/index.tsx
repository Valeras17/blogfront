import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextWrapper } from "./context/DarkModeContext";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { BlogContextProvider } from "./context/BlogContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <BlogContextProvider>
        <AuthContextProvider>
          <DarkModeContextWrapper>
            <App />
          </DarkModeContextWrapper>
        </AuthContextProvider>
      </BlogContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

reportWebVitals();

