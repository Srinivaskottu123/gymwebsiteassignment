import React from "react";
import Featurebox from "./Featurebox";

export default function Feature(){
    return(
        <div id='features'>
            <h1>YOUR FITNESS OUR MISSION</h1>
            <p>At GymFluencer,our mission is simple: to  provide the tools</p>
            <div className="a-container">
             <Featurebox num = '463k+' title='ddddddf'/>
             <Featurebox num = '163k+' title='ddddddf'/>
             <Featurebox num = '13k+' title='ddddddf'/>
            </div>
        </div>
    )
}