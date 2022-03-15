import React, { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/fontawesome-free-brands'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./style.css";

function German() {
  const [githubAvatar, setgithubAvatar] = useState("");
  const [githubName, setgithubName] = useState("");
  const [githubEmail, setgithubEmail] = useState("");
  const [githubBio, setgithubBio] = useState("");
  const [githubLocation, setgithubLocation] = useState("");
  const [githubUrl, setgithubUrl] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Gaalmonte")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setgithubAvatar(data.avatar_url);
        setgithubName(data.name);
        setgithubEmail(data.email);
        setgithubBio(data.bio);
        setgithubLocation(data.location);
        setgithubUrl(data.html_url);
      });
  }, []);

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={githubAvatar}
        alt="Germans profile picture"
      />
      <Card.Body>
        <Card.Title>{githubName}</Card.Title>
        <Card.Text className="card-text">{githubBio}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Email: german.a.almonte@gmail.com {githubEmail}
        </ListGroupItem>
        <ListGroupItem>Located: {githubLocation}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ExternalLink href={githubUrl} target="_blank">
          <FontAwesomeIcon className='fa-lg github-icon' icon={faGithub} />
        </ExternalLink>
      </Card.Body>
    </Card>
  );
}

export default German;
