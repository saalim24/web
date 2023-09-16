import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "World Cup 2026: Could climate crisis impact the men's tournament?",
      description:
        "After a record-breaking summer of extreme temperatures in the US, BBC Sport looks at the possible impact on the 2026 World Cup.",
      url: "https://www.bbc.co.uk/sport/football/66211285",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3FF1/production/_130396361_gettyimages.jpg",
      publishedAt: "2023-09-15T05:05:08Z",
      content:
        'At the 1994 World Cup in the US, Republic of Ireland manager Jack Charlton memorably criticised Fifa\'s policy of not allowing drinks bottles on the pitch\r\n"One player is going to die."\r\nWith extreme … [+9537 chars]',
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "Jake Lahut",
      title: "GOP Presidential Campaigns Are Ghosting Key States",
      description:
        "Photo Illustration by Luis G. Rendon/Elizabeth Brockway/The Daily Beast/Reuters\r\nWelcome to Trail Mix, a fun but nutritious snack for your election news diet. See something interesting on the trail? Email me at jake.lahut@thedailybeast.com.This week, we dive …",
      url: "https://www.thedailybeast.com/gop-presidential-campaigns-are-ghosting-key-states",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1694742885/230914-trail-mix-campaign-ghost-towns-hero_ai8mxr",
      publishedAt: "2023-09-15T04:36:53Z",
      content:
        "Welcome to Trail Mix, a fun but nutritious snack for your election news diet. See something interesting on the trail? Email me at jake.lahut@thedailybeast.com.\r\nThis week, we dive into the disappeara… [+10826 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=218542227ecc45f3bf4508399b2788f7&page=1&pagesize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=218542227ecc45f3bf4508399b2788f7&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 21)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=218542227ecc45f3bf4508399b2788f7&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>Top Headlines</h1>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 21)
              }
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
