import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";
import { useEffect } from "react";
import Redux, { useSelector, useDispatch, connect } from "react-redux";
import { fetchMovie, searchMovie, setData } from "./features/movieSlice";

const mapStateToProps = (state) => ({
  search: state.movie.searchMovie,
});

function App() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, [movie.search, dispatch]);

  return (
    <div className="AppBG">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </BrowserRouter>
        <input
          type="text"
          value={movie.setData}
          onChange={(e) => {
            dispatch(searchMovie(e.target.value));
          }}
        />
        <div>{movie.apiData.title}</div>
        <div>{movie.apiData.image} </div>
        <div>{movie.apiData.description}</div>
        <Footer />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
