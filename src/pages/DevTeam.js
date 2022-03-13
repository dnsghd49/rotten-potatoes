import "./style.css";
import banner from "./banners/banner5.png";
import Aaron from "../components/Devs/Aaron";
import Derek from "../components/Devs/Derek";
import German from "../components/Devs/German";
import Omar from "../components/Devs/Omar";

function DevTeam() {
    return (
        <div className='dev-team'>
            <img className="bannerStyle" src={banner} alt="a big potato" />
            <h3 className="headerc">front-end devs</h3>
            <div className='alignments'>
                <div className='card-alignments'>
                    <Aaron />
                    <German />
                </div>
            </div>
            <h3 className="headerc">back-end devs</h3>
            <div className='alignments'>
                <div className='card-alignments'>
                    <Derek />
                    <Omar />
                </div>
            </div>
        </div>
  );
}

export default DevTeam;
