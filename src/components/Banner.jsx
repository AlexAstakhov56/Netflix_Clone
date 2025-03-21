import backgroundImage from "/background.jpg";

const Banner = ({ text }) => {
  return (
    <div className="w-full bg-gray lg:h-80 relative overflow-hidden rounded-md">
      <img
        src={backgroundImage}
        alt="banner"
        className="w-full h-full object-cover "
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center text-5xl font-bold">
        {text}
      </div>
    </div>
  );
};

export default Banner;
