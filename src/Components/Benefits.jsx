import React from "react";
import { CiStar } from "react-icons/ci";
import Benefitchild from "./Benefitchild";
import { MdOutlinePerson4 } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { FaGalacticRepublic } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";



export default function Benefits(){
 return (
    <div className="b-container">
    <button className="star-btn"><CiStar style={{color:'white'}}/><span className="spa">Our Benefits</span></button>
    <h1>Discover GymFluencer Benefits</h1>
    <span className="b-para">Unlock your full potential </span>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthwPdx58wWt1XXIXA8NyCVGGlFec6IRmqXA&s'/>
    <div className="b-containerflx">

    <Benefitchild  matter='Effortless Workout Logging' icon={<MdOutlinePerson4 />} para='Easily log your workouts and monitor' />
    <Benefitchild  matter='Personalised Workout Plans' icon={<WiStars />
} para='AI-powered workout plans tailored to your fitness level' />
    <Benefitchild  matter='Accurate Rep Counting' icon={<FaGalacticRepublic />
} para='Count your reps accurately with my app' />
    <Benefitchild  matter='Calorie Calculation And Personalised Diet Plans' icon={<CiFaceSmile />
} para='Calculate calories burned during workouts and AI-customised meal plans for optimal nutrition and wellness' />
    </div>
    </div>
 )
}
