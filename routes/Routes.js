import { useRouter } from "next/router";
import Register from "../pages/index";
import Login from "../pages/sign-in";
import Home from "../pages/home";

const ProtectedRoutes = () => {
  const router = useRouter();
  const auth = true;

  if (!auth) {
    router.push("/");
    return null;
  }

  return <Home />;
};

const PublicRoutes = () => {
  const router = useRouter();
  const auth = true;

  if (auth) {
    router.push("/home");
    return null;
  }

  return (
    <>
      <Register />
      <Login />
    </>
  );
};

export default function MyPage() {
  const router = useRouter();

  const auth = true;

  if (router.pathname === "/public") {
    return <PublicRoutes />;
  } else if (router.pathname === "/protected") {
    return <ProtectedRoutes />;
  }

  return <div>404 - Page not found</div>;
}
