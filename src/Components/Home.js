import React from 'react';
import "./Home.css";
import categoryItems  from "../dataSource/categories";

export default function Home() {
    function renderCategoryItem() {
        
        return categoryItems.map((categoryItem)=>{
            return (
                <div className="category-text" 
                key={categoryItem.name}>
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

