import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import {
  HomePage,
  DiscoverPage,
  BlogPost,
  SignIn,
  SignUp,
} from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Route>
    </Route>
  )
);

export { router };
