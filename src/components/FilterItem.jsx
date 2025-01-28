const FilterItem = ({ filter, isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive ? "bg-secondary text-white" : "bg-gray text-black"
      } font-lg font-semibold py-2 px-5 cursor-pointer hover:bg-secondary hover:text-white transition-colors duration-200 rounded-xl`}
      onClick={() => onClick(filter)}
    >
      {filter}
    </div>
  );
};

export default FilterItem;
