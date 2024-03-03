import Hero from "../assets/Hero.png";
const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10 lg:flex-row justify-center items-center pt-16 lg:pt-6 lg:px-14">
        <div className="w-full text-center lg:text-left md:w-1/2 text-6xl font-bold md:text-6xl lg:text-7xl px-16 md:px-0 md:tracking-wide">
          Every transaction feels right !
        </div>
        <div className="w-3/4 md:w-1/2">
          <img src={Hero} alt="" className="w-full " />
        </div>
      </div>
    </>
  );
};

export default Home;
