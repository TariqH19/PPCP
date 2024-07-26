import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles?populate=*")
      .then(({ data }) => {
        setArticles(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`app-container`}>
      {loading ? (
        <div className="centered">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <h1 className="heading text-center">
            There are {articles.length} articles in IADT
          </h1>
          <div className="grid">
            {articles.map((service, index) => (
              <div key={index} className="card">
                <Link to={`/article-view/articles/${service.attributes.slug}`}>
                  <h2 className="card-title">{service.attributes.Title}</h2>
                  <p className="card-text">{service.attributes.SubHeading}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
