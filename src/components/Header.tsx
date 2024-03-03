import Branding from "./Branding";
import ToggleTheme from "./ToggleTheme";

import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <>
      <div className="w-full sticky inset-0 flex bg-primary items-center justify-between px-8 sm:px-16 md:px-36 py-4">
        <Branding />
        <div className="flex items-center">
          <UserAvatar />
          <ToggleTheme />
        </div>
      </div>
    </>
  );
};

export default Header;
