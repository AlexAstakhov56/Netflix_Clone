const Title = ({ title, Icon }) => {
  return (
    <div className="flex w-full gap-4 sm:gap-6 items-center">
      <Icon className="w-8 h-8 text-secondary" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default Title;
