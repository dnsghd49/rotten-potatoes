import './style.css'

import Aaron from "../components/Devs/Aaron"
import Derek from "../components/Devs/Derek"
import German from "../components/Devs/German"
import Omar from "../components/Devs/Omar"

function DevTeam() {
    return (
        <div className='dev-team'>
            <h4>Our Front-end team</h4>
            <div className='alignments'>
                <div className='card-alignments'>
                    <Aaron />
                    <German />
                </div>
            </div>
            <h4>Our Back-end team</h4>
            <div className='alignments'>
                <div className='card-alignments'>
                    <Derek />
                    <Omar />
                </div>
            </div>
        </div>
    )
}

export default DevTeam