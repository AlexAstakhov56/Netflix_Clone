const InfoIcon = ({ info, data, Icon }) => {
  return (
    <p className="text-xl my-4 flex items-center gap-3">
      <span className="font-semibold">{info}</span> {data}
      <Icon className="text-secondary" />
    </p>
  );
};

export default InfoIcon;
