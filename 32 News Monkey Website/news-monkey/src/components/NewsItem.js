import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
