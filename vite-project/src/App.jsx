import Navbar from './Navbar.jsx'
import './App.css'
import About from './assets/About.jsx'
import Event from './Event.jsx'
import Contact from './Contact.jsx'
import Team from './Team.jsx'
import Lottie from 'lottie-react'
import animationdata from "./assets/Animation - 1706135991575.json"
import { motion} from 'framer-motion'


function App() {
   

  return (
<>   
     
    <body>
    <Navbar></Navbar>
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1"><h1>REC<span>ursion</span></h1></div>
            <Lottie animationData={animationdata} />
            
            </div>
        </div>
    </section>


    <About></About>
    <Team></Team>
    <Event></Event>

    <Contact></Contact>

    
    <footer>
        <h3>will link instagram,linkedin</h3>
    </footer> 

</body>
</>


  )
}

export default App
