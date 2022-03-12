import TvshowsTopBar from "../components/Carousel/TvshowsTopBar";
import "./style.css";
import banner from "./banner2.png"

const TvShowsTab = () => {
  return (
    <div className="content">
      {/* <h3 className="headerc">TV Shows</h3> */}
      <img src={banner}/>
      <TvshowsTopBar />
    </div>
  );
};

export default TvShowsTab;
