import React from "react";
import { Link } from "react-router-dom";

export default function Dietplanchild(props){
    return(
        <div className="f-container">
           <div>
             <Link to={`/${props.lin}`}><img width={"200px"} src={`${props.image}`}></img></Link>
           </div>
           <div>
            <h1>{props.title}</h1>
            </div>
            <div>
            <span>{props.matter}</span>
            </div>
        </div>
    )
}