import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen text-center my-5">
      <div>Page Not Found</div>
      <div className="my-5">
        <NavLink
          to="/"
          className="px-6 py-2 bg-secondary text-white rounded-xl text-lg"
        >
          Return to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
