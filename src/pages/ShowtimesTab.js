import Showtimes from "../components/Charts/showtimes";
import "./style.css";
import banner from "./banners/banner3.png";

const ShowtimesTab = () => {
  return (
    <div className="content">
      <img className="bannerStyle" src={banner} alt="a big potato"/>
      {/* <h3 className="headerc">Showtimes</h3> */}
      <Showtimes />
    </div>
  );
};

export default ShowtimesTab;
