import Nav from "react-bootstrap/Nav";
import "./style.css";
import { useNavigate } from "react-router-dom";

function TvshowsDropdown() {
  let navigate = useNavigate();

  const routeShow = () => {
    let path = `/show`;
    navigate(path);
  };
  return (
    <div className="dropdown">
      <Nav.Link onClick={routeShow}>TV shows</Nav.Link>
      <div className="tvshows-dropdown-content">
        <div className="dp-flex">
          <div className="tvshows-dropdown-items">
            <p>COMING SOON...</p>
          </div>
          <div className="tvshows-dropdown-imgs">
            <p>CERTIFIED FRESH PICKS</p>
            {/* <div className='movie-poster'>
                            <img src={{}} alt='movie poster'></img>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvshowsDropdown;
