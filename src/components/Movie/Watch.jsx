const Watch = ({ url, title }) => {
  return (
    <div className="flex items-center justify-center md:py-10 py-5">
      <video
        controls
        className="md:w-2/3 w-full md:h-[600px] h-[270px] rounded-lg px-4"
      >
        <source src={url} type="video/mp4" title={title} />
      </video>
    </div>
  );
};

export default Watch;
