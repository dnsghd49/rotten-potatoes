// import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

function Dashboard(props) {
    return (props.trigger) ? (
        <div className='dashboard-popup'>
            <div className=''>
                <FontAwesomeIcon className='' onClick={() => props.setTrigger(false)} icon={faXmark} />
                <Form Form onSubmit={() => props.setTrigger(false)} action='/dashboard' method='POST'>
                    <div>
                        Hello User!  
                    </div>
                    <Button variant="primary" type="submit">
                        Logout
                    </Button>
                </Form>
            </div>
        </div>
    ) : ""
}

export default Dashboard;