import { TiWeatherPartlySunny } from "react-icons/ti";

const Logo = () => {
  return (
    <div>
      <a href="/" className="flex items-center text-2xl gap-1">
        <TiWeatherPartlySunny className="text-3xl text-blue-700 " />
        <h2 className=" font-bold">
          <span className="text-blue-700">W</span>eatherly
        </h2>
      </a>
    </div>
  );
};

export default Logo;
