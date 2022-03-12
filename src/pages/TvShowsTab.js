import TvshowsTopBar from "../components/Carousel/TvshowsTopBar";
import "./style.css";
import banner from "./banners/banner2.png";

const TvShowsTab = () => {
  return (
    <div className="content">
      {/* <h3 className="headerc">TV Shows</h3> */}
      <img className="bannerStyle" src={banner} alt="a big potato"/>
      <TvshowsTopBar />
    </div>
  );
};

export default TvShowsTab;
