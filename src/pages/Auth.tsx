import { Outlet, useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  if(localStorage.getItem("token")) {
    navigate("/");
  }
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
