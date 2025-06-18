import React from 'react'
import Design from "./Design"
import { FaWhatsapp, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import animationdata from './assets/newanimi.json';
import MovingText from 'react-moving-text'
import { motion } from "framer-motion";

function Section1() {
    const text = "I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.........".split(" ");

    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto px-4 py-6 gap-8 lg:mt-12">
            {/* Left Side: Design and Main Content */}
            <div className="w-full  flex flex-col justify-center">
                {/* Optional: Design Component */}
                <div className="mb-6 w-full">
                    <Design />
                </div>
                {/* Animated Greetings */}
                <MovingText
                    className="font-black text-white"
                    type="fadeInFromTop"
                    duration="1200ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="forwards"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">👋 Hi There,</h2>
                    <h1 className="mt-4 sm:mt-7 text-2xl sm:text-4xl">
                        I'm <span className="text-sky-400 text-3xl sm:text-5xl">Ananthu Lal</span>
                    </h1>
                </MovingText>
                {/* Animated Description */}
                <div className="mt-6 font-bold text-base sm:text-lg text-cyan-200 leading-relaxed flex flex-wrap">
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 6,
                                delay: i / 10,
                                repeat: Infinity,
                                repeatType: "reset"
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </div>
                {/* About Me Button */}
                <motion.button
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.8,
                    }}
                    className="pointer-events-none text-white font-bold shadow-sm shadow-white bg-sky-500 rounded-xl w-36 h-12 mt-8 sm:mt-12"
                >
                    About me 👇
                </motion.button>
                {/* Social Icons */}
                <div className="flex flex-wrap gap-5 mt-8">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
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
                            <FaWhatsapp size={32} className="text-green-500" />
                        </a>
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
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
                            <FaInstagram size={32} className="text-pink-500" />
                        </a>
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
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
                            <FaTwitter size={32} className="text-white" />
                        </a>
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1.3, 1, 1],
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
                            <FaGithub size={32} className="text-white" />
                        </a>
                    </motion.div>
                </div>
            </div>
            {/* Right Side: Lottie Animation */}
            <div className='grid place-items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.8,
                    }}
                    className="w-full  flex justify-center items-center"
                >
                    <Lottie
                        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[36rem] md:h-96 mt-6 md:mt-0"
                        animationData={animationdata}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Section1;
