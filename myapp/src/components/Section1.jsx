import React from 'react'
// import Particles from '@tsparticles/react';
// import Particlesconfif from './Particles/Particlesconfig'
import Design from "./Design"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import animationdata from './assets/newanimi.json';
import MovingText from 'react-moving-text'
import { motion } from "framer-motion";
// import { TypeAnimation } from 'react-type-animation';
function Section1() {
    const text = "I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.........".split(" ");

    return (
        <div className='mt-56 sm:mt-12 ml-2 size-fit md:flex'>
            <Design />
            <div className='md:w-1/2 md:ml-32 md:mt-8'>
                <MovingText className=' font-black  text-white'
                    type="fadeInFromTop"
                    duration="1200ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="forwards">
                    <h2 className='text-5xl font-bold text-white'>👋Hi There,</h2>
                    <h1 className='mt-6 sm:mt-7 text-4xl text-nowrap'>

                        I'm  <span className='text-sky-400 text-5xl'>Ananthu Lal</span></h1>

                    {/* <h1 > I'm Ananthu <span className='text-sky-400'>Lal</span></h1> */}
                    {/* <p className='text-white mt-4 text-left'>"I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by Web development solutions"</p> */}

                    {/* <p className='mt-12 font-bold text-white'>  I'm a professional Web Developer. My Main Goal to help & Satisficed the Local & Global Clients by Web development solutions.I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p> */}
                </MovingText>
                <div className="Section1 mt-6 font-bold text-lg text-cyan-200">
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }} // Initial state: opacity 0
                            animate={{ opacity: 1 }} // Animated state: opacity 1
                            transition={{
                                duration: 6,
                                delay: i / 10,
                                repeat: Infinity, // Repeat the animation infinitely
                                repeatType: "reset" // Reset the animation to the initial state
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </div>
                {/* <TypeAnimation
                    text="Hello, I'm typing!"
                    speed={100}
                    cursorClassName="cursor"
                /> */}


                <br></br>
                <motion.button
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.8,
                    }
                    } className='pointer-events-none text-white font-bold shadow-sm shadow-white bg-sky-500 rounded-xl w-36 h-12 mt-6 sm:mt-12'>About me 👇</motion.button>
                <div className='flex mt-7'>
                    <motion.div

                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
                            // rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        <a href='https://wa.me/918848898710' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={35} className='text-green-500 mt-4' />
                        </a>
                    </motion.div>

                    <motion.div className="ml-3"
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
                            // rotate: [0, 0, 360, 360, 0],
                            borderRadius: ["0%", "0%", "25%", "25%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.6, 0.9, 1],
                            repeat: Infinity,
                            repeatDelay: 1.5
                        }}
                    >
                        <a href='https://www.instagram.com/heyananthu?igsh=MWI4eDVvOWNkMzdoNA==' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={35} className='text-pink-500 mt-4' />
                        </a>
                    </motion.div>

                    <motion.div className="ml-3"
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
                            // rotate: [0, 0, 45, 45, 0],
                            borderRadius: ["0%", "0%", "30%", "30%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.7, 1, 1],
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                    >
                        <a href='https://x.com/heyananthulal?t=5AoqNTNoe6_fIU1WYkHzUQ&s=09' target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={35} className='text-white mt-4' />
                        </a>
                    </motion.div>

                    <motion.div className="ml-3"
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
                            // rotate: [0, 0, 30, 30, 0],
                            borderRadius: ["0%", "0%", "20%", "20%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.5, 0.8, 1, 1],
                            repeat: Infinity,
                            repeatDelay: 2.5
                        }}
                    >
                        <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
                            <FaGithub size={35} className='text-white mt-4' />
                        </a>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.8,
                }
                }
                className='md:w-96 md:absolute md:left-1/2 md:ml-64 md:top-4 '>
                <Lottie className='mt-12 md:mt-28 bg-black' animationData={animationdata} />
            </motion.div>
        </div >
    )
}

export default Section1;
