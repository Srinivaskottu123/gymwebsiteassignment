import React, { useState } from "react";
import Marquee from "react-fast-marquee";
export default function Marqimg(){
   var[i,setA] = useState(1);
   setInterval(function ()
{
   if(i<2){
    setA(i+1)
   }
   else{
    setA(1)
   }
},5000)

    return (
        <div className="h-container">

       <div>
          <h1 style={{textAlign:'center',color:'red'}}>5-STAR PREMIUM FITNESS CENTER</h1>
       </div>

       <div style={{display:'flex',gap:'20px'}}>
         <div style={{textAlign:'center',color:'white'}}>
            <span>Personalised Workout Plans tailored to your goals </span>
         </div>

         <div style={{textAlign:'center',color:'white'}}>
         <span>Get expert Guidance with virtual coaching</span>

         </div>

         <div style={{textAlign:'center',color:'white'}}>
         <span>Personalised Workout Plans tailored to your goals </span>

         </div>
       </div >


       <div style={{width:'200px',height:'200px',display:'flex',justifyContent:'center',marginLeft:'40%'}}>
       
        {
            i==1 && <img    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTz4BnT8wpjDBUxLvY70rxQhV9xeJr1qcqA&s"/>
            
        
        }
        {
        i==2 && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoJXodxCTOVcwXjA3BOgkQCoz10zWIdZV8g&s'/>
        }
        
        
        
        


       </div>

        </div>
    )
}