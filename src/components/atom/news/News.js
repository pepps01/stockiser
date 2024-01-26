import React from "react";

function News(props) {
  return (
    <div
      style={{
        marginLeft: "0px",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      <h5
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          padding: "0px",
          textAlign: "left",
          lineHeight: "1.2rem",
          fontWeight: 500,
          marginBottom: ".2rem",
        }}
      >
        {props.title}
      </h5>
      <div
        style={{
          marginTop: "0px",
          padding: "0px",
          margin: "0px",
          display: "flex",
          justifyContent: "left",
          color: "light-grey",
          alignContent: "center",
          marginLeft: "0px",
        }}
      >
        <p
          style={{
            padding: "0px",
            margin: "0px",
            textAlign: "left",
            fontSize: ".8rem",
          }}
        >
          {props.media} -
        </p>
        <p
          style={{
            padding: "0px",
            margin: "0px",
            textAlign: "left",
            fontSize: ".8rem",
          }}
        >
          {props.timer}
        </p>
      </div>
    </div>
  );
}

export default News;
