import "./style.css";
import banner from "./banners/banner4.png";
import PodcastList from "../components/Charts/PodcastList";

const PodCast = () => {
  return (

    <div className="content">

      <img className="bannerStyle" src={banner} alt="a big potato"/>
      <PodcastList />
      {/* <h3 className="headerc">Movies</h3> */}
    </div>
  );
};

export default PodCast;
