import React from "react";
import backgroundImage from "../components/assets/images/serv1.jpg"
import heroImg from "../components/assets/images/hero4.png"
//import heroImgback from "../components/assets/images/hero-shape-purple.png"
import { FiSearch} from "react-icons/fi"
import { Link } from "react-router-dom";
import {BsFillLightningChargeFill} from "react-icons/bs"
import {FaBookReader, FaGraduationCap, FaUsers} from "react-icons/fa"
import About from "./About"
import Courses from "./Courses"
import Services from "./Services"
import Blog from "./Blog"
const Home = () =>{
    return (
        <>
            <HomeContent/>
            <About/>
            <br/>
            <br/>
            <br/>
            <Courses/>
            <Services/>
            <Blog/>
            
        </>
        )

}
export const HomeContent =() =>{
    return(
        <>
  <section className="bg-cover py-10 h-[80vh] md:h-[80vh]" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div className="container mx-auto px-4 h-full">
    <div className="flex flex-col md:flex-row items-center mt-12">
      <div className="py-0 md:w-1/2 text-center md:text-left">
        <h1 className="text-9xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-gray-500 bg-clip-text text-transparent">Elevate Your Potential With SkillHub</h1>
        <p className="text-gray-100 mb-6">Lorem Ipsum is simply dummy text of the printing and types has been the industry's standard dummy text.</p>
        <div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded mr-4">Sign Up</button>
          {/*<button className="bg-gray-300 text-black px-6 py-3 rounded">Learn More</button>*/}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 mb-0 md:mt-0">
        <img src={heroImg} alt="E-learning" className="w-full h-full max-w-[700px] max-h-[700px] object-contain" />
      </div>
    </div>
  </div>
</section>

    
        </>
)
    
};
export default Home;