import React from "react";
export default function Offer(props){
    
    return(
        
        <div id='presentation' style={{backgroundImage:`url(${props.image})`}} >
          
            <h1 >{props.title}</h1>
             
          
        </div>
        
    )
}