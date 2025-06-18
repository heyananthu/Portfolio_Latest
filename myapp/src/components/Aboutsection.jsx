import React from 'react';
import Lottie from 'lottie-react';
import profileanim from './assets/profileanimi.json';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';

function Aboutsection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="mt-20 sm:mt-36 px-4 max-w-screen-xl mx-auto">
            {/* Heading */}
            <h1 className="text-cyan-500 font-black text-3xl sm:text-5xl md:text-7xl text-center mb-8">
                <span className="text-white">About </span>Me
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Animation */}
                <div className="w-full  flex justify-center" ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.3,
                        }}
                        className="w-64 sm:w-80 md:w-3/4"
                    >
                        <Lottie animationData={profileanim} />
                    </motion.div>
                </div>
                {/* About Content */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.5,
                    }}
                    className="w-full  md:mt-14 flex flex-col items-center md:items-start"
                >
                    <h2 className="text-white text-2xl sm:text-4xl font-black text-center md:text-left">
                        I'm <span className="text-cyan-500">Ananthu Lal</span>
                    </h2>
                    <h3 className="text-white font-black text-lg sm:text-2xl mt-4 text-center md:text-left">Web Developer</h3>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.6,
                        }}
                        className="text-cyan-500 mt-4 text-sm sm:text-base text-center md:text-left max-w-xl"
                    >
                        I am a Full-Stack developer based in Kollam, Kerala. I am a BCA undergraduate from Kerala University. I am now pursuing my MCA from Kerala University. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
                    </motion.p>
                    <h3 className="text-white mt-6 text-center md:text-left">
                        <span className="text-cyan-200 font-black text-base sm:text-xl">Email: </span>heyananthulal@gmail.com
                    </h3>
                    <h3 className="text-white mt-4 text-center md:text-left">
                        <span className="text-cyan-200 font-black text-base sm:text-xl">Place: </span>Kollam, Kerala 691572
                    </h3>
                    <div className="mt-8 flex justify-center md:justify-start w-full">
                        <motion.div whileTap={{ scale: 0.93 }}>
                            <a
                                className="text-white bg-cyan-500 rounded-xl px-6 py-3 flex items-center font-semibold transition hover:bg-cyan-600"
                                href="https://drive.google.com/file/d/1DNAyRaRETLJunTgO_DgmMmm7hDkpgDuw/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                                <FaDownload className="ml-2" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Aboutsection;
