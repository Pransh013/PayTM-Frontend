import { Link, useLocation } from "react-router-dom";
import Branding from "./Branding";
import ToggleTheme from "./ToggleTheme";

import UserAvatar from "./UserAvatar";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full sticky z-50 inset-0 flex bg-primary items-center justify-between px-8 sm:px-16 md:px-36 py-4">
        <Link to={"/"}>
          <Branding />
        </Link>
        <div className="flex items-center gap-28">
          <div className="flex gap-12 items-center text-primary-foreground dark:text-secondary-foreground text-xl font-semibold ">
            <Link to={"/"}>
              <p
                className={` ${
                  location.pathname === "/"
                    ? "underline-effect-active underline-effect"
                    : "underline-effect"
                }`}
              >
                Home
              </p>
            </Link>
            <Link to={"/send"}>
              <p
                className={` ${
                  location.pathname === "/send"
                    ? "underline-effect-active underline-effect"
                    : "underline-effect"
                }`}
              >
                Send Money
              </p>
            </Link>
            <Link to={"/history"}>
              <p
                className={` ${
                  location.pathname === "/history"
                    ? "underline-effect-active underline-effect"
                    : "underline-effect"
                }`}
              >
                Check History
              </p>
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <UserAvatar initials="PV" />
            <ToggleTheme />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
