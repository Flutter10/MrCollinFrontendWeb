import React from "react";
import Heading from "../../assets/blog/article/Heading.png";
import article1 from "../../assets/blog/article/article1.png";
import article2 from "../../assets/blog/article/article2.png";

import article3 from "../../assets/blog/article/article3.png";
import article4 from "../../assets/blog/article/article4.png";
import article5 from "../../assets/blog/article/article5.png";
import article9 from "../../assets/blog/article/article9.png";

import "../../styles/blog/article.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const articles = [
  {
    title:
      "Catch your big break with these top record labels looking for artists",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    date: "12 March",
    author: "John Doe",
    image: article1,
  },
  {
    title: "How to promote your music independently",
    description:
      "Explore various ways to distribute and market your music without a record label.",
    date: "15 March",
    author: "Jane Smith",
    image: article2,
  },
  {
    title: "Songwriting tips from Grammy-winning artists",
    description:
      "Discover how top songwriters craft their biggest hits and improve your own writing skills.",
    date: "18 March",
    author: "Alex Johnson",
    image: article3,
  },
  {
    title:
      "Catch your big break with these top record labels looking for artists",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    date: "12 March",
    author: "John Doe",
    image: article4,
  },
  {
    title: "How to promote your music independently",
    description:
      "Explore various ways to distribute and market your music without a record label.",
    date: "15 March",
    author: "Jane Smith",
    image: article5,
  },
  {
    title: "Songwriting tips from Grammy-winning artists",
    description:
      "Discover how top songwriters craft their biggest hits and improve your own writing skills.",
    date: "18 March",
    author: "Alex Johnson",
    image: article9,
  },
];

const categories = [
  "All",
  "Promotions",
  "Songwriting",
  "Industry",
  "Production",
  "News",
  "Live",
];

export default function Article() {
  return (
    <div className="container py-2 article">
      <div className="row">
        <div className="col-12 data text-center ">
          <img src={Heading} className="img-fluid" alt="Blog Heading" />
          <div className="d-flex flex-wrap justify-content-center gap-2 py-3">
            {categories.map((category, index) => (
              <div key={index} className="filter_category px-4 py-1">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-6 col-lg-4 py-2">
            <div className="card p-3 h-100">
              <div className="card-img-container">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt="Article"
                />
              </div>
              <div className="card-body d-flex flex-column">
                <span className="card-text font-weight-bold">
                  {article.title}
                </span>
                <p className="card-desc py-1 flex-grow-1">
                  {article.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="date_tag">
                    {article.date} - {article.author}
                  </div>
                  <div className="d-flex align-items-center gap-2 article_button px-3 py-1">
                    <span>Read On</span>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex align-items-center justify-content-center gap-3 py-3">
          <div className="d-flex prev align-items-center justify-content-center gap-2">
            <div>
              <FaLongArrowAltLeft />
            </div>

            <div>Previous Page</div>
          </div>
          <div className="d-flex next align-items-center justify-content-center gap-3">
            <div>Next Page</div>
            <div>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
