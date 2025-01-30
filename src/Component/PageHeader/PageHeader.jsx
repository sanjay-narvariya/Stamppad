import React from "react";
import bgImage from '../../images/slider2.png'

const PageHeader = ({ topheading, title }) => {
  return (
    <>
    <section className="all-sec-margin">
    <div
      className="position-relative d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        width: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      ></div>

      {/* Content */}
      <div className="position-relative">
        <h1 className="fw-bold display-4">{topheading}</h1>
        <p className="lead">
          <a href="/" className="text-white text-decoration-none">
            Home
          </a>{" "}
          / <span className="text-light">{title}</span>
        </p>
      </div>
    </div>
    </section>
    </>
  );
};

export default PageHeader;
