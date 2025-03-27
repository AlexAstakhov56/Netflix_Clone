import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addMovieHelper, updateMovieHelper } from "../utils/moviesHelper";

const MovieModal = ({ isModalVisible, setIsModalVisible, movie = {} }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [rate, setRate] = useState(0);
  const [image, setImage] = useState();

  const [desc2, setDesc2] = useState(movie.desc);
  const [category2, setCategory2] = useState(movie.category);
  const [year2, setYear2] = useState(movie.year);
  const [time2, setTime2] = useState(movie.time);
  const [rate2, setRate2] = useState(movie.rate);

  const handleAddMovie = () => {
    if (
      title.length === 0 ||
      desc.length === 0 ||
      category.length === 0 ||
      year.length === 0 ||
      time.length === 0 ||
      rate === 0
    ) {
      toast.error("Fill in all fields!");
    } else {
      const movieToAdd = {
        title,
        desc,
        category,
        year,
        time,
        rate,
        image,
      };
      addMovieHelper(dispatch, movieToAdd);
      setTitle("");
      setDesc("");
      setCategory("");
      setTime("");
      setRate(0);
      setImage();
      setIsModalVisible(false);
    }
  };

  const handleUpdateMovie = () => {
    if (
      desc2.length === 0 ||
      category2.length === 0 ||
      year2.length === 0 ||
      time2.length === 0 ||
      rate2 === 0
    ) {
      toast.error("Fill in all fields!");
    } else {
      const movieToUpdate = {
        title: movie.title,
        desc: desc2,
        category: category2,
        year: year2,
        time: time2,
        rate: rate2,
      };
      console.log(movieToUpdate);
      updateMovieHelper(dispatch, movieToUpdate);
      setIsModalVisible(false);
    }
  };

  return (
    <>
      {isModalVisible && (
        <div
          onClick={() => setIsModalVisible(false)}
          className="fixed p-5 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/70 z-1000"
        >
          <div
            onClick={handleModalClick}
            className="bg-gray-300 max-h-[90vh] px-12 py-6 text-black text-center overflow-y-auto"
          >
            {Object.keys(movie).length === 0 ? (
              <div>
                <p className="text-4xl font-semibold my-5">Add a new Movie</p>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Title</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a movie title:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Description</p>
                  <textarea
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter a movie description:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Category</p>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-lg py-2 px-4"
                  >
                    <option value="">Choose the category</option>
                    <option value="Action">Action</option>
                    <option value="Fantastic">Fantastic</option>
                    <option value="Detective">Detective</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romantic">Romantic</option>
                  </select>
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Year</p>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Enter a movie year:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Time</p>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Enter a movie time:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Rate</p>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Enter a movie rate:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Image</p>
                  <input
                    type="file"
                    className="border rounded-lg py-2 px-4"
                    onChange={(e) => setImage(e.target.files)}
                  />
                </div>

                <div className="flex gap-5 justify-center items-center text-lg">
                  <button
                    className="bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg"
                    onClick={handleAddMovie}
                  >
                    Add
                  </button>
                  <button
                    className="bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg"
                    onClick={() => setIsModalVisible(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-4xl font-semibold my-5">Update a Movie</p>

                <p className="text-xl my-4">{movie.title}</p>

                {/* <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Title</p>
                  <input
                    type="text"
                    value={movie.title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a movie title:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div> */}

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Description</p>
                  <textarea
                    type="text"
                    value={desc2}
                    onChange={(e) => setDesc2(e.target.value)}
                    placeholder="Enter a movie description:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Category</p>
                  <select
                    value={category2}
                    onChange={(e) => setCategory2(e.target.value)}
                    className="border rounded-lg py-2 px-4"
                  >
                    <option value="">Choose the category</option>
                    <option value="Action">Action</option>
                    <option value="Fantastic">Fantastic</option>
                    <option value="Detective">Detective</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romantic">Romantic</option>
                  </select>
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Year</p>
                  <input
                    type="text"
                    value={year2}
                    onChange={(e) => setYear2(e.target.value)}
                    placeholder="Enter a movie year:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Time</p>
                  <input
                    type="text"
                    value={time2}
                    onChange={(e) => setTime2(e.target.value)}
                    placeholder="Enter a movie time:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div>

                {/* <div className="my-4 text-lg">
                  <p className="font-semibold mb-2">Rate</p>
                  <input
                    type="number"
                    value={rate2}
                    onChange={(e) => setRate2(e.target.value)}
                    placeholder="Enter a movie rate:"
                    className="border rounded-lg py-2 px-4"
                  />
                </div> */}

                <div className="flex gap-5 justify-center items-center text-lg">
                  <button
                    className="bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg"
                    onClick={handleUpdateMovie}
                  >
                    Update
                  </button>
                  <button
                    className="bg-secondary cursor-pointer text-white py-2 px-4 rounded-lg"
                    onClick={() => setIsModalVisible(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieModal;
