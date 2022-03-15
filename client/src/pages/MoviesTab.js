import MovieTopBar from "../components/Carousel/MovieTopBar";
import "./style.css";
import banner from "./banners/banner1.png";

const MoviesTab = () => {
  return (
    <div className="content">
      <img className="bannerStyle" src={banner} alt="a big potato"/>
      {/* <h3 className="headerc">Movies</h3> */}
      <MovieTopBar />
    </div>
  );
};

export default MoviesTab;
