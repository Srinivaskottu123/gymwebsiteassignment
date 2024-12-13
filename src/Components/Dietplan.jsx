import React from "react";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import { BsPersonAdd } from "react-icons/bs";
import Dietplanchild from "./Dietplanchild";

export default function Dietplan(){
    return(
        
        <div>
    <Navbar/>
    <div className="e-container">
     <div>
        <h1>What Is The Workout Plan</h1>
     </div>
     <div>
        <span>A workout plan is a structural schedule of excercises designed to help you reach your fitness goals</span>
     </div>
     <div>
        <h1>What We Offer:</h1>
     </div>
     <div style={{display:'flex',gap:'30px',marginLeft:'10%'}}>
        <div>
        <h1><BsPersonAdd />
        </h1>
        <span>Customised Workout Plans</span>
        </div>
        <div>
        <h1><BsPersonAdd />
        </h1>
        <span>Profesional Guidance</span>
        </div>
        <div>
        <h1><BsPersonAdd />
        </h1>
        <span>Holistic Approach</span>
        </div>

     </div>
     <div>
    <h1>SELECT YOUR WORKOUT PLAN</h1>
        </div>
        <div style={{width:'400px',marginLeft:'220px'}}>
            <span  >Choose a workout plan that fits your goals whether it"s building strength,losing weight,or staying active.</span>
        </div>
        <div className="image-container">
            <Dietplanchild lin='beginner' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGkZ6b3g6Qk_OTDYakHzBPaxE3x6YbD4xlA&s' title='BEGINNER' matter='start your fitness journey'/>
            <Dietplanchild lin='intermediate' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDrGKnMKP_Myv11ajIq_ZGXrwb7mso5OisA&s' title='INTERMEDIATE' matter='start your fitness journey'/>
            <Dietplanchild lin='advanced' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MIlz68oc0bG3diiNWlw7TBCDF1tAKSO3lw&s' title='ADVANCED' matter='Push your limits with high intensity'/>
            <Dietplanchild lin='personalised-plan' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNssm3muqDsenlLY52eD-hr-QaewWA41Ykw&s' title='PERSONALISED WORKOUT PLAN' matter='Create your own workout plan'/>
        </div>
        <div className="form-container">
          <div className="form-back">
               <div style={{display:'grid',width:'50%'}}>
                <h1>KICKSTART YOUR FITNESS JOURNEY WITH GYMFLUENCER</h1>
                <span>Experience all that GymFluencer has to offer with a freetrail.Explore our world-class anemeties,personalized data plans ,and professional training programmes</span>


               </div>

               <div style={{marginTop:'50px'}}>
                <form>
                <label for='name' style={{color:'white'}}>  Name   </label>
                    <input name='name' style={{width:'100px',marginRight:'10px'}} type='text'/>
                    <label for='number' style={{color:'white'}}>  Ph.no  </label>
                    <input name="number" style={{width:'100px',marginRight:'20px'}} type='text'/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <label for='mail' style={{color:'white'}}> E-mail  </label>
                    
                    <input  name = 'mail'style={{width:'150px',marginRight:'20px',backgroundColor:'white',}} type='text'/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
    
                    <label for='services ' style={{color:'white'}}>  Servics   </label>
                    <select>
                        <option disabled>Please select</option>
                        <option>Diet Plans</option>
                        <option>Workout Plans</option>
                        <option>Both</option>
                    </select>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button style={{width:'100px',backgroundColor:'red'}}>Submit</button>
                    </form>
               </div>
          </div>
        </div>
    </div>
    <Bottom/>
        </div>
    )
}