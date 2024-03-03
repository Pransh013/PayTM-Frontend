import { Outlet, useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
