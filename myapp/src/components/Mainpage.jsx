import React from 'react'
import Nav from "./Nav";
import Section1 from "./Section1";
import Aboutsection from "./Aboutsection";
import EducationSection from "./EducationSection";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Myprojects from "./Myprojects";
function Mainpage() {
    return (
        <div>
            <Nav />
            <div id="Section1"><Section1 /></div>
            <div id="About"><Aboutsection /></div>
            <div id="Education"><EducationSection /></div>
            <div id="Skills"><Skills /></div>
            <div id="Myprojects"><Myprojects /></div>
            <div id="Contact"><Contact /></div>
            <Footer />

        </div>
    )
}

export default Mainpage


