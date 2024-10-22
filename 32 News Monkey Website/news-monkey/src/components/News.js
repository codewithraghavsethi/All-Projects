import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
        <div className="container my-3">
            <h1>News Monkey - Headlines News Morning Express.</h1>
          <div className="row">
            <div className="col-md-3">
              <NewsItem title="My Raghav" description="hello ji" />
            </div>
            <div className="col-md-3">
              <NewsItem title="My Raghav" description="hello ji" />
            </div>
            <div className="col-md-3">
              <NewsItem title="My Raghav" description="hello ji" />
            </div>
            <div className="col-md-3">
              <NewsItem title="My Raghav" description="hello ji" />
            </div>
            <div className="col-md-3">
              <NewsItem title="My Raghav" description="hello ji" />
            </div>
          </div>
        </div> 
    );
  }
}
