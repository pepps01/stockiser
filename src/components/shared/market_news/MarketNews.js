import React from "react";
import News from "../../atom/news/News";

const MarketNews = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignContent: "center",
      }}
    >
      <h3
        style={{
          textAlign: "left",
        }}
      >
        Market News
      </h3>
      <div
        style={{
          overflowY: "scroll",
          scrollbarColor: "green",
          height: "20vh",
        }}
      >
        <News
          title={
            "Welcome to the Market segment.  elcome to the Market segment elcome to the Market segment"
          }
          media="Guardian"
          timer="18 hours ago"
        />
        <hr style={{ opacity: 0.2 }}></hr>
        <News
          title={"Stock market capitalisation plunges by N78 billion"}
          media="Guardian"
          timer="18 hours ago"
        />
        <hr style={{ opacity: 0.2 }}></hr>
        <News
          title={"Stock market capitalisation plunges by N78 billion"}
          media="Guardian"
          timer="18 hours ago"
        />
        <hr style={{ opacity: 0.2 }}></hr><News
          title={"Stock market capitalisation plunges by N78 billion"}
          media="Guardian"
          timer="18 hours ago"
        />
        <hr style={{ opacity: 0.2 }}></hr>
        <News
          title={"Julius Berger posts N71.2b turnover, N3.4b PBT in Q1"}
          media="Guardian"
          timer="18 hours ago"
        />
      </div>
    </div>
  );
};

export default MarketNews;
