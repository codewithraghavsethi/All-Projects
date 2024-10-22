import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: null,
      title:
        "‘You are not my king,’ Indigenous Australian senator yells at visiting King Charles - The Associated Press",
      description:
        "An Indigenous senator told King Charles III that Australia is not his land as the British royal visited Australia’s parliament. Sen. Lidia Thorpe was escorted out of a parliamentary reception for the royal couple Monday after shouting that British colonizers …",
      url: "https://apnews.com/article/australia-canberra-king-charles-visit-4ea87d39d17c4a9fe3cbfab3455fb8f7",
      urlToImage:
        "https://dims.apnews.com/dims4/default/35d2b12/2147483647/strip/true/crop/5954x3349+0+310/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F14%2F0d%2F7c1938ecd6dfbdbed8050812e8ad%2Fb1277731640d4e8294aa57a4c6947b74",
      publishedAt: "2024-10-21T09:38:00Z",
      content:
        "CANBERRA, Australia (AP) An Indigenous senator told King Charles III that Australia is not his land as the British royal visited Australias parliament on Monday.\r\nSen. Lidia Thorpe was escorted out o… [+5036 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Daren Butler",
      title:
        "Gulen, the powerful cleric accused of orchestrating a Turkish coup, dies - Reuters",
      description:
        "The U.S.-based cleric Fethullah Gulen, who built a powerful Islamic movement in Turkey and beyond but spent his later years mired in accusations of orchestrating an attempted coup against Turkish leader Tayyip Erdogan, has died. He was 83.",
      url: "https://www.reuters.com/world/us/turkish-us-based-cleric-gulen-has-died-media-says-2024-10-21/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/76R6N7WYLRLIJO3646JM3LPKDU.jpg?auth=eda3d6b92c088f0cffd19c15a3da98118ec4266bcfd0c79e3ebff34b0228188c&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-10-21T09:17:23Z",
      content: null,
    },

    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Angelica Stabile",
      title:
        "What is rucking? This popular fitness trend goes back to basics for big gains - Fox News",
      description:
        "A military training technique called rucking has become a popular, low-impact workout. GORUCK CEO Jason McCarthy and celebrity fitness trainer Kollins Ezekh gives tips on how to get started.",
      url: "https://www.foxnews.com/health/what-rucking-popular-fitness-trend-back-basics-big-gains",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/couple-rucking.jpg",
      publishedAt: "2024-10-21T08:30:00Z",
      content:
        "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+4623 chars]",
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Khaleda Rahman",
      title:
        "McDonald's Donald Trump Worked at Failed Last Health Inspection - Newsweek",
      description:
        'An inspection report for the McDonald\'s restaurant in Pennsylvania cited employees not having "hands clean and properly washed."',
      url: "https://www.newsweek.com/mcdonalds-donald-trump-worked-failed-last-health-inspection-1971998",
      urlToImage:
        "https://d.newsweek.com/en/full/2499814/former-president-donald-trump-mcdonalds.jpg",
      publishedAt: "2024-10-21T08:29:34Z",
      content:
        "The McDonald's restaurant where Republican presidential nominee Donald Trump briefly worked on Sunday failed its last health inspection, documents show.\r\nThe former president manned the fry station a… [+3952 chars]",
    },

    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "BRIAN MAHONEY",
      title:
        "Jonquel Jones delivers WNBA Finals MVP performance to bail out Ice-cold Ionescu and Stewart - The Associated Press",
      description:
        "Sabrina Ionescu’s first shot hit the side of the backboard. Another one soon after hit nothing at all. After making one of the most memorable shots in WNBA history to win Game 3, the All-Star guard became Ice-cold Ionescu the rest of the way. Ionescu shot 1 f…",
      url: "https://apnews.com/article/wnba-finals-liberty-ionescu-stewart-jones-mvp-7d8f7f2d8a709049b24dc3a81c5c02b5",
      urlToImage:
        "https://dims.apnews.com/dims4/default/ea84d1b/2147483647/strip/true/crop/4064x2286+0+213/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F92%2Fa6%2F767acb5d5e61b474ff7b776e9447%2F27a2274bbd9047af831dd292077dce91",
      publishedAt: "2024-10-21T05:03:00Z",
      content:
        "NEW YORK (AP) Sabrina Ionescus first shot hit the side of the backboard. Another one soon after hit nothing at all. \r\nAfter making one of the most memorable shots in WNBA history to win Game 3, the A… [+3126 chars]",
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
         {this.state.articles.map((element)=>{console.log(element)})}
        <div className="row">
          <div className="col-md-3">
            <NewsItem
              title="My Raghav"
              description="hello ji"
              imageUrl="https://thumbs.dreamstime.com/b/tree-growing-out-open-book-tree-surrounded-moss-leaves-book-open-to-page-tree-333450125.jpg"
              newsUrl="Todo"
            />
          </div>
        </div>
      </div>
    );
  }
}
