import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Supports = () => {
  const [supports, setSupports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services?populate=*")
      .then(({ data }) => {
        setSupports(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`app-container`}>
      {loading ? (
        <div className="centered" role="status" aria-live="polite">
          <div className="spinner" aria-label="Loading"></div>
        </div>
      ) : (
        <>
          <h1 className="heading text-center">
            There are {supports.length} student supports in IADT
          </h1>
          <div className="grid">
            {supports.map((service, index) => (
              <div key={index} className="card">
                <Link to={`/support-view/services/${service.attributes.slug}`}>
                  <h2 className="card-title">{service.attributes.Title}</h2>
                  <p className="card-text">{service.attributes.VideoCaption}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Supports;
