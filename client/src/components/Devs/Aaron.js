import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './style.css'

function Aaron() {
    const [githubData, setgithubData] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/dnsghd49')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setgithubData(data)
            })
    }, [])

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img className='dev-profile' variant="top" src={githubData.avatar_url} alt="Aarons profile picture" />
            <Card.Body>
                <Card.Title>{githubData.name}</Card.Title>
                <Card.Text className='card-text'>
                    {githubData.bio}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Email: yunhonglu0409@gmail.com</ListGroupItem>
                <ListGroupItem>Located: {githubData.location}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <ExternalLink href={githubData.html_url} target="_blank">
                    <FontAwesomeIcon className='fa-lg github-icon' icon={faGithub} />
                </ExternalLink>
            </Card.Body>
        </Card>
    )
}

export default Aaron