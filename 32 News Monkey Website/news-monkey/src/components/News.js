import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    // console.log("hello I am a constructor");

    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=us&apiKey=e3a026cbfa4d42fe9b45ecb60e6ebbac";
    let data = await fetch(url);
    let parsedDate = await data.json();
    // console.log(parsedDate);
    this.setState({ articles: parsedDate.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Headlines News Morning Express.</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
