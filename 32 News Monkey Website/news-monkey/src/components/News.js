import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    
  {
      "source": {
          "id": "associated-press",
          "name": "Associated Press"
      },
      "author": null,
      "title": "‘You are not my king,’ Indigenous Australian senator yells at visiting King Charles - The Associated Press",
      "description": "An Indigenous senator told King Charles III that Australia is not his land as the British royal visited Australia’s parliament. Sen. Lidia Thorpe was escorted out of a parliamentary reception for the royal couple Monday after shouting that British colonizers …",
      "url": "https://apnews.com/article/australia-canberra-king-charles-visit-4ea87d39d17c4a9fe3cbfab3455fb8f7",
      "urlToImage": "https://dims.apnews.com/dims4/default/35d2b12/2147483647/strip/true/crop/5954x3349+0+310/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F14%2F0d%2F7c1938ecd6dfbdbed8050812e8ad%2Fb1277731640d4e8294aa57a4c6947b74",
      "publishedAt": "2024-10-21T09:38:00Z",
      "content": "CANBERRA, Australia (AP) An Indigenous senator told King Charles III that Australia is not his land as the British royal visited Australias parliament on Monday.\r\nSen. Lidia Thorpe was escorted out o… [+5036 chars]"
  },
  {
      "source": {
          "id": "reuters",
          "name": "Reuters"
      },
      "author": "Daren Butler",
      "title": "Gulen, the powerful cleric accused of orchestrating a Turkish coup, dies - Reuters",
      "description": "The U.S.-based cleric Fethullah Gulen, who built a powerful Islamic movement in Turkey and beyond but spent his later years mired in accusations of orchestrating an attempted coup against Turkish leader Tayyip Erdogan, has died. He was 83.",
      "url": "https://www.reuters.com/world/us/turkish-us-based-cleric-gulen-has-died-media-says-2024-10-21/",
      "urlToImage": "https://www.reuters.com/resizer/v2/76R6N7WYLRLIJO3646JM3LPKDU.jpg?auth=eda3d6b92c088f0cffd19c15a3da98118ec4266bcfd0c79e3ebff34b0228188c&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-10-21T09:17:23Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Tracy Swartz",
      "title": "Strokes are common — here’s how to prevent most of them - New York Post ",
      "description": "More than 600,000 Americans are expected to experience their first stroke this year — but up to 80% of these incidents may be preventable.",
      "url": "https://nypost.com/2024/10/21/lifestyle/how-to-prevent-a-stroke-stroke-association-issues-new-advice/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/10/preventing-first-stroke-possible-screening-91885950.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-10-21T09:00:00Z",
      "content": "More than 600,000 Americans are expected to experience their first stroke this year but up to 80% of these incidents may be preventable.\r\nThe American Stroke Association (ASA) issued updated advice o… [+3830 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "Dahieh: The Beirut suburb bearing the brunt of Israeli bombing - BBC.com",
      "description": "Families have been left in despair after parts of Dahieh, a densely packed residential area, were reduced to rubble",
      "url": "https://www.bbc.com/news/articles/cz7jx575pg7o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/af92/live/1e8fb4c0-8e35-11ef-89ae-5575c76d98e6.jpg",
      "publishedAt": "2024-10-21T08:51:11Z",
      "content": "An air strike on the edge of the Dahieh area that completely destroyed one building and damaged adjacent buildings, including a large gynaecology clinic\r\nThe air strike that killed the Hezbollah lead… [+11210 chars]"
  },
  
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Angelica Stabile",
      "title": "What is rucking? This popular fitness trend goes back to basics for big gains - Fox News",
      "description": "A military training technique called rucking has become a popular, low-impact workout. GORUCK CEO Jason McCarthy and celebrity fitness trainer Kollins Ezekh gives tips on how to get started.",
      "url": "https://www.foxnews.com/health/what-rucking-popular-fitness-trend-back-basics-big-gains",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/couple-rucking.jpg",
      "publishedAt": "2024-10-21T08:30:00Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+4623 chars]"
  },
  {
      "source": {
          "id": "newsweek",
          "name": "Newsweek"
      },
      "author": "Khaleda Rahman",
      "title": "McDonald's Donald Trump Worked at Failed Last Health Inspection - Newsweek",
      "description": "An inspection report for the McDonald's restaurant in Pennsylvania cited employees not having \"hands clean and properly washed.\"",
      "url": "https://www.newsweek.com/mcdonalds-donald-trump-worked-failed-last-health-inspection-1971998",
      "urlToImage": "https://d.newsweek.com/en/full/2499814/former-president-donald-trump-mcdonalds.jpg",
      "publishedAt": "2024-10-21T08:29:34Z",
      "content": "The McDonald's restaurant where Republican presidential nominee Donald Trump briefly worked on Sunday failed its last health inspection, documents show.\r\nThe former president manned the fry station a… [+3952 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Elizabeth Wagmeister",
      "title": "Sean ‘Diddy’ Combs named in at least 6 new lawsuits; other celebrities allegedly involved - CNN",
      "description": "Six new civil lawsuits have been filed against Sean “Diddy” Combs, including one from an accuser who says they were a minor at the time they were allegedly drugged and assaulted by the music producer.",
      "url": "https://www.cnn.com/2024/10/21/entertainment/sean-diddy-combs-new-lawsuits-monday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1747401006-20241021063027279.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-10-21T07:18:00Z",
      "content": "Six new civil lawsuits have been filed against Sean Diddy Combs, including one from an accuser who says they were a minor at the time they were allegedly drugged and assaulted by the music producer.\r… [+3685 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "PhoneArena"
      },
      "author": "Daniel Petrov",
      "title": "Samsung Galaxy Z Fold Special Edition is out with $2000 price and 200MP camera - PhoneArena",
      "description": "More expensive than the regular Z Fold 6.",
      "url": "https://www.phonearena.com/news/samsungs-galaxy-z-fold-special-edition-price-specs_id163935",
      "urlToImage": "https://m-cdn.phonearena.com/images/article/163935-wide-two_1200/Samsung-Galaxy-Z-Fold-Special-Edition-is-out-with-2000-price-and-200MP-camera.jpg",
      "publishedAt": "2024-10-21T07:07:08Z",
      "content": "Enjoy the hottest mobile tech storylines, delivered straight to your inbox."
  },
  ];
  constructor() {
    super();
    console.log("hello I am a constructor");

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Headlines News Morning Express.</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3">
              <NewsItem
                key={element.url}
                title={element.title.slice(0, 40)}
                description={element.description.slice(0, 80)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}
