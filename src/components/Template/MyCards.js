import React from "react";
import MyCard from "./MyCard";

const MyCards = ({ data, media }) => {
    const Cards = () => {
        return data.map((item) => {
            return (
                <MyCard item={item} media={media} />
            )
        })
    }
   
    return (
        <div className="d-flex justify-content-start gap-4 pb-3" id="cards" style={{ overflowX: 'scroll'}}>
            <Cards />
        </div>
    );
}

export default MyCards