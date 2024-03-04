import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SendMoney from "./pages/SendMoney";
import History from "./pages/History";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/send",
        element: <SendMoney />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
  {
    element: <Auth />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default appRouter;
