import React from "react";
import Offer from "./Offer";

export default function Backimages(){
    return (
        <div>
        <div id="about">
            <h1 style={{color:'red'}}>OUR SERVICES</h1>
            </div>
            <div id='about' style={{color:'white'}}>
                <h2>GymFluencer offers 5 ggttr jjhgfee jjrr</h2>
            </div>
            <div style={{display:'flex',justifyContent:"space-evenly"}}>
            <Offer image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEg1TAhKbzDC1DIB3v7us_r-1jCLRoMR4Xg&s' title='TRACK'/>
            <Offer image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbGWuY-u5YgDew0R1-W1C7bvtRWh6VE5mnQ&s' title='ANALYZE'/>
            <Offer image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Qua14QRAjJEoaweFIJygxH_oSqfSCsoOEw&s' title='TRAIN'/>
            <Offer image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn0--O4Go2Pl3rN8ljY0QVxBEAoRRur_ttQ&s' title='CONNECT'/>
            <Offer image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tsCTXjQRVHWlPXfNshmeBh2gorh2TuOXaQ&s' title='CHALLENGE'/>
           </div>
           </div>
        
    )
}