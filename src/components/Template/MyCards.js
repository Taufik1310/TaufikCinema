import React from "react";
import MyCard from "./MyCard";

const MyCards = ({ data, media }) => {
    const Cards = () => {
        return data.map((item) => {
            return (
                <div 
                    style={{ minWidth: 150, maxWidth: 150, minHeight: 330 , maxHeight:400 }} 
                >
                    <MyCard item={item} media={media} />
                </div>
            )
        })
    }
   
    return (
        <div className="d-flex justify-content-start gap-4 pb-2" id="cards" style={{ overflowX: 'scroll'}}>
            <Cards />
        </div>
    );
}

export default MyCards