import React from "react";
import { Card } from "react-bootstrap";
import players from "../players";

const Player = ({ players }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{players.name}</Card.Title>
        <Card.Text>
          Age: {players.age}<br />
          Position: {players.position}<br />
          Team: {players.team}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
