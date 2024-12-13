import React from "react";

export default function Benefitchild(props){
    return(
        <div className ='c-container'>
            <span>{props.icon}</span>
            <h1>{props.matter}</h1>
            <span>{props.para}</span>
        </div>
    )
}