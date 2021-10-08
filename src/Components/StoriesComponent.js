import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import Stories from 'react-insta-stories';
import StoriesData from '../dataSource/StoriesData';

export default function StoriesComponent() {
    const match = useRouteMatch();
    const history = useHistory();
    function goBackToHomePage() {
        history.push("/");
    }
        const categoryName = match.params.categoryName;
        const stories = StoriesData[categoryName].map((storyItem) =>{
            if (storyItem.type ==="imageCaptionPost"){
                return {
                    content: ({ action, isPaused }) => {
                        return (
                                <div style={
                                    {
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: "100vw",
                                    height: "100vh",
                                    backgroundImage: `url(${storyItem.backgroundImageUrl})`,

                                    }}>
                                  <div style={
                                      {
                                          fontSize: "2rem",
                                          lineHeight: "2rem",
                                          color: "white",
                                          marginTop: "5px",
                                      }}>
                                     <span>{storyItem.caption}</span> 
                                  </div>  
                                </div>
                            );
                    },
                }
            }
            else if(storyItem.type === "textImagePost"){
                return {
                    content: ({ action, isPaused }) => {
                        return (
                                <div style={
                                    {
                                    backgroundPosition: "center",
                                    width: "100vw",
                                    height: "100vh",
                                    backgroundColor: storyItem.backgroundColor,
                                    }}>
                                  
                                  <div style={
                                      {
                                          fontSize: "2rem",
                                          lineHeight: "2rem",
                                          color: "white",
                                          marginTop: "5px",
                                      }}>
                                     <span>{storyItem.title}</span> 
                                  </div>
                                  <div style={
                                      {
                                          width: "100vw",
                                          
                                        }} >
                                      <img src={storyItem.postImageUrl} 
                                          style={
                                              {
                                                height: "50vh",
                                              }
                                          }
                                      />
                                    </div> 
                                  <div style={
                                      {
                                        
                                          textAlign: "center",
                                          color: "white",
                                          fontSize: "1.2rem",
                                      }
                                  }>
                                     <span>{storyItem.text} </span> 
                                  </div>
                                </div>
                            );
                    },
                }
            }
    } );
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
};
