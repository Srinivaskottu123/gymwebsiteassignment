import React from "react";

export default function Featurebox (props){
    return(
        <div className="a-box">
        <div class = 'a-b-img'>
            <h3>{props.num}</h3>
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            
        </div>
        </div>
    )
}