import Logo from "../assets/Logo.png";
import LogoText from "../assets/LogoText.png";
const Branding = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <img src={Logo} alt="logo" className="w-12" />
        <img
          src={LogoText}
          alt="logo"
          className="w-40 invert brightness-90 dark:filter-none"
        />
      </div>
    </>
  );
};

export default Branding;
