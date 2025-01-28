import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
