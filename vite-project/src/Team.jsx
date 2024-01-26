import React from "react";
import { motion, } from 'framer-motion'

function Team(){
    return(
        
          
        <section class="services" id="services">
        <div class="max-width">
            <h2 class="title"> Team </h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Mission</div>
                        <p>Working towards the improvement of campus's coding culture by organizing regular coding classes and contests.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Vision</div>
                        <p>To grow as a strong coding community and uphold the integrity of NIT Durgapur as a technical institution.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Value</div>
                        <p>We believe that helping each other is the only way. We take care and always look to get the best out of everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Team