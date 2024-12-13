import React from "react";

export default function Transformchild(props){
    return (
        <div className="j-container">
         

      <div>
        <h1 style={{color:'red'}}>TRANSFORMATION MADE POSSIBLE WITH GYM INFLUENCERS</h1>
      </div>

       <div>
        <h2 style={{color:'white'}}>Name:{props.name}</h2>
        <h2 style={{color:'white'}}>Age:{props.age}</h2>
       </div>


       <div>
        <table cellSpacing={30}>
            <tr>
                <td style={{color:'white'}}>{props.weeks}</td>
                <td style={{color:'white'}}>Before</td>
                <td style={{color:'white'}}>After</td>
            </tr>

            <tr>
                <td style={{color:'white'}}>weight</td>
                <td style={{color:'white'}}>{props.before}</td>
                <td style={{color:'white'}}>{props.after}</td>
            </tr>

            <tr>
                <td style={{color:'white'}}> Bodyfast</td>
                <td style={{color:'white'}}>{props.bbefore}</td>
                <td style={{color:'white'}}>{props.bafter}</td>
            </tr>
        </table>
       </div>


              <div>
                   <table cellSpacing={30}>
                    
                        <tr style={{color:'white'}}><img src={`${props.image1}`}/></tr>

                    
                    
                        <tr style={{color:'red'}}><h1>BEFORE {' '} {'     '}AFTER</h1></tr>
                    
                   </table>
               </div>



        </div>
    )
}