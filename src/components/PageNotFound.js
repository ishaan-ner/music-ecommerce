import React from "react";
import PageTitle from "../common/PageTitle";

const PageNotFound = (props) => {
  return (
    <div>
      <PageTitle>Error 404</PageTitle>
      <PageTitle>page not found</PageTitle>
      <h2
        style={{
          textAlign: "center",
          color: "var(--text-primary",
          textTransform: "uppercase",
        }}
      >
        The requested URL:{" "}
        <span
          style={{
            color: "var(--text-danger-dark)",
          }}
        >
          {props.location.pathname}
        </span>{" "}
        could not be found
      </h2>
    </div>
  );
};

export default PageNotFound;
