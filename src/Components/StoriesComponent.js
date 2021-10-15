import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
//import { useParams } from 'react-router-dom';
import Stories from "react-insta-stories";
import StoriesData from "../dataSource/StoriesData";

export default function StoriesComponent() {
  const match = useRouteMatch();
  const history = useHistory();
  function goBackToHomePage() {
    history.push("/");
  }
  const categoryName = match.params.categoryName;
  const stories = StoriesData[categoryName].map(
    (
      { backgroundImageUrl, title, captionColor, caption, backgroundColor },index
    ) => {
      return {
        content: ({ action, isPaused }) => {
          return (
            <div
              style={{
                width: "100vw",
                backgroundColor: backgroundColor === null ? null : backgroundColor,
                height: "100vh",
              }}>
              <h1
                style={{
                  fontSize: 30,
                  color: captionColor === null ? null : "white",
                }}>
                {title}
              </h1>
              <div style={
                    {
                    display: "inline",
                    width: "50vw",
                    height: "50vh",
                    }}>
                  <img src={backgroundImageUrl} />
                  
                </div>
                <div style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  alignSelf: "center",
                  }}>
                  <p>{caption}</p>
                </div>
            </div>
          );
        },
      };
    }
  );
  return (
    <div>
      <Stories
        stories={stories}
        width={"100vw"}
        height={"100vh"}
        onAllStoriesEnd={() => goBackToHomePage()}
      />
    </div>
  );
}
