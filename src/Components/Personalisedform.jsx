import React from "react";
import Navbar from "./Navbar";
import Bottom from "./Bottom";

export default function Personalisedform(){
    return (
        <div>
        <div className="g-container">
          <Navbar/>
          <div className="g-form">
    <h1>PERSONALISED WORKOUT PLAN FORM</h1>
    <h2>1.Fitness Goals</h2>
    <h3>Primary Goals</h3>

    <div className="box">
        <div className="chec">
            <input type='checkbox' value=''/>WeightLoss<br/>
            <input type='checkbox' value=''/>Endurance <br/>
            <input type='checkbox' value=''/>Overall Fitness<br/>
        </div>
        <div className="chec">
        <input type='checkbox' value=''/>Muscle Gain<br/>
        <input type='checkbox' value=''/>Flexibility <br/>
        </div>
          </div>


           <div>
            <h1>SPECIAL AREAS OF FOCUS</h1>
            <h2>FITNESS LEVEL:</h2>
            <div className="box">
            <div className="chec">
            <input type='checkbox' value=''/>Upper Body<br/>
            <input type='checkbox' value=''/>Core <br/>
             </div>
             <div className="chec">
             <input type='checkbox' value=''/>Lower Body<br/>
              <input type='checkbox' value=''/>Full body <br/>
              </div>
            </div>
        </div>



        <div>
            <h1>2.CURRENT FITNESS LEVEL</h1>
            <h2>FITNESS LEVEL:</h2>
            <select>
                <option style={{color:'white'}}>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
            <h1>EXCERCISE EXPERIENCE</h1>
            <div className="box">
            <div className="chec">
            <input type='checkbox' value=''/>Squats<br/>
            <input type='checkbox' value=''/>Cardio Machines<br/>
             </div>
             <div className="chec">
             <input type='checkbox' value=''/>Push-Ups<br/>
              <input type='checkbox' value=''/>Others <br/>
              </div>
            </div>
        </div>

        <div>
            <h1>4.WORKOUT PREFERENCES</h1>
            <h2>PREFERRED WORKOUT TYPES</h2>
            <div className="box">
            <div className="chec">
            <input type='checkbox' value=''/>Strength Training<br/>
            <input type='checkbox' value=''/>Yoga <br/>
            <input type='checkbox' value=''/>Body Weight <br/>
             </div>
             <div className="chec">
             <input type='checkbox' value=''/>Cardio<br/>
              <input type='checkbox' value=''/>HIIT <br/>
              </div>
            </div>
        </div>

        

        <div>
            <h1>5.SCHEDULE AND TIME AVAILABILITY</h1>
            <h2>DAYS AVAILABLE FOR WORKOUT</h2>
            <div className="box">
            <div className="chec">
            <input type='checkbox' value=''/>Monday<br/>
            <input type='checkbox' value=''/>Wednesday<br/>
            <input type='checkbox' value=''/>Friday <br/>
            <input type='checkbox' value=''/>Sunday <br/>
             </div>
             <div className="chec">
             <input type='checkbox' value=''/>Tuesday<br/>
              <input type='checkbox' value=''/>Thursday<br/>
              <input type='checkbox' value=''/>Saturday <br/>
              </div>
            </div>
        </div>
        <br/>
        <br/>
        
         <button style={{width:'100%',backgroundColor:'red'}}>Submit</button>
        
           


          </div>
        </div>
        <Bottom></Bottom>
        </div>
        
    )
}