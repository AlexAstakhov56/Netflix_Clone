const PageButton = ({ value, currentPage, onClick }) => {
  return (
    <button
      className={`px-5 py-2 cursor-pointer  text-white text-lg rounded-xl ${
        currentPage === value ? "bg-secondary" : "bg-gray-500"
      }`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default PageButton;
