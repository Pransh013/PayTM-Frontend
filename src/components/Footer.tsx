import Appstore from "../assets/Appstore.png";
import Playstore from "../assets/Playstore.png";
import X from "../assets/X.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
const Footer = () => {
  return (
    <>
      <div className="w-full px-40 mt-28 py-12 bg-primary-foreground">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-xl font-bold max-w-56">
              Download Payify App to pay from anywhere
            </p>
            <div className="w-[10.6rem]">
              <img src={Appstore} alt="appstore" className="w-full cursor-pointer" />
            </div>
            <div className="w-36">
              <img src={Playstore} className="w-full cursor-pointer" alt="playstore" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={X} className="w-7 cursor-pointer" alt="playstore" />
            <img src={IG} className="w-7 cursor-pointer" alt="playstore" />
            <img src={FB} className="h-7 cursor-pointer" alt="playstore" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
