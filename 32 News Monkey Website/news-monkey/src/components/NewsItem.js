import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class NewsItem extends Component {
  
  render( ){
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <Card style={{ width: "18rem", height: "420px"}}  >
          <Card.Img variant="top" src={imageUrl} style={{height: "250px"}} />
          <Card.Body>
            <Card.Title>{title}.....</Card.Title>
            <Card.Text>{description}.....</Card.Text>
            <Button variant="primary" href={newsUrl} target="_blank">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
