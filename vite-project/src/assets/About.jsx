import React from "react";
import Console from "../console";


function About(){
    return(
        <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About Us</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="src\assets\pexels-myburgh-roux-4816921.jpg" alt="error"/>
                </div>
                <div className="column right">
                    <div className="text">  <span className="typing-2">We are programming community of NIT Durgapur, with focus on improving coding culture institute wide by conducting regular lectures from beginner to advance topics of programming. Our goal is to increase student's participation in inter-collegiate contest like ACM-ICPC and help them get better.</span></div>    
                    <div className="C">
                        <br></br>
                        <br></br>
                    <Console></Console> 
                        </div>
                </div>
                
            </div>
        </div>
    </section>
    
    )
}

export default About