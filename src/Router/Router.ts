import { Admin } from "components/Layout";
import Home from "features/Home/Home";
import LoginPage from "features/auth/LoginPage/LoginPage";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];
const privateRoute = [
  {
    path: "/admin",
    component: Admin,
  },
];

export { publicRoutes, privateRoute };
