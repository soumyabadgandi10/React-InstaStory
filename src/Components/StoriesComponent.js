import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Stories from 'react-insta-stories';
import StoriesData from '../dataSource/StoriesData';

export default function StoriesComponent() {
    let match = useRouteMatch();
    function renderStories() {
        const categoryName = match.params.categoryName;
        const stories= StoriesData[categoryName].map((storyItem) =>{
            return {
                content: ({ action, isPaused }) => {
                    return (
                            <div style={
                                {
                                width: "100vw",
                                height: "100vh",
                                backgroundImage: `url(${storyItem.backgroundImageUrl})`
                                }}>
                              <div style={
                                  {
                                      fontSize: "2rem",
                                      lineHeight: "2rem",
                                      color: "white",
                                      marginTop: "5px",
                                  }
                              }>
                                 <span>storyItem.caption</span> 
                              </div>  
                            </div>
                        );
                },
            }
        } );
    }
 
    return (
        <div>
            <Stories loop stories={Stories}/>
        </div>
    );
};
