const Watch = ({ url, title }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <video controls className="w-2/3 h-[600px] rounded-lg">
        <source src={url} type="video/mp4" title={title} />
      </video>
    </div>
  );
};

export default Watch;
