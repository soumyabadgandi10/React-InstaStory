import React from 'react';
import "./Home.css";
import categoryItems  from "../dataSource/categories";
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    function redirectToStory(categoryItem) {
        history.push(`/story/${categoryItem.name.toLowerCase()}`);
}
    function renderCategoryItem(){
        
        return categoryItems.map((categoryItem)=>{
            return (
                <div className="category-text" 
                key={categoryItem.name}
                onClick={() => redirectToStory(categoryItem)}>
                <div className="category-outer-circle">
                    <div className="category-inner-circle ">
                        <i className="material-icons">{categoryItem.iconName}</i>
                    </div>
                </div>
                <div>{categoryItem.name}</div>
                </div>
            );
        });
    }
      return (
        <div>
            <div className="header">Stories Feed</div>
            <div className="grid-container">{renderCategoryItem()}</div>
        </div>
    );
}

