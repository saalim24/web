import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: "24", name: "Saalim" },
      author: "Saalim",
      title: "Kobe Bryant",
      description: "Not Available",
      url: "https:www.youtube.com",
      urlToImage:
        "data:image/jpeg;base64,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",
      publishedAt: "2023-09-15T05:05:08Z",
      content: "Not Available",
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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=218542227ecc45f3bf4508399b2788f7&page=1&pagesize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=218542227ecc45f3bf4508399b2788f7&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=218542227ecc45f3bf4508399b2788f7&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center m-5">Top Headlines</h1>
          {this.state.loading && <Spinner></Spinner>}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
