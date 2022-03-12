import Showtimes from "../components/Charts/showtimes";
import "./style.css";
import banner from "./banner3.png"

const ShowtimesTab = () => {
  return (
    <div className="content">
      <img src={banner}/>
      {/* <h3 className="headerc">Showtimes</h3> */}
      <Showtimes />
    </div>
  );
};

export default ShowtimesTab;
