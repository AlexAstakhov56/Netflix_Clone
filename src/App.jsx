import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Layout from "./layout/Layout";
import Contacts from "./screens/Contacts";
import Favourites from "./screens/Favourites";
import { useEffect } from "react";
import MoviesPage from "./screens/MoviesPage";
import MoviePage from "./screens/MoviePage";
import { Toaster } from "react-hot-toast";

export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Layout>
        <div>
          <Toaster
            toastOptions={{
              success: {
                className: "text-lg",
                style: {
                  border: "2px solid #18f520",
                  padding: "10px",
                },
              },
              error: {
                className: "text-lg",
                style: {
                  border: "2px solid #f00707",
                  padding: "10px",
                },
              },
            }}
          />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
