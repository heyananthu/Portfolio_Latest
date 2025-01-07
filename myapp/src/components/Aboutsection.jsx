import React from 'react';
import Lottie from 'lottie-react';
import profileanim from './assets/profileanimi.json';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';

function Aboutsection() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Play animation only once
        threshold: 0.1, // Play animation when 10% of the section is in view
    });

    return (
        <div className='mt-20 sm:mt-36'>
            <div>
                <h1 className='text-cyan-500 font-black text-5xl ml-24 md:text-center md:text-7xl'>
                    <span className='text-white'>About </span>Me
                </h1>
                <div className='md:flex'>
                    <div className='md:w-1/2' ref={ref}>

                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.3,
                            }}>
                            <Lottie className='md:w-3/4 md:ml-14 md:mt-14' animationData={profileanim}></Lottie>
                        </motion.div>

                    </div>
                    <motion.div
                    ref={ref}
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {opacity : 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                        }}
                        className='ml-9 md:w-96 md:mt-24'>
                        <h2 className='text-white text-4xl font-black'>
                            I'm <span className='text-cyan-500'>Ananthu Lal</span>
                        </h2>
                        <h3 className='text-white font-black text-2xl mt-4'>Web Developer</h3>
                        <motion.p
                        ref={ref}
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView ? { opacity: 1, x: 0 }: {opacity:0}}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.6,
                            }}
                            className='text-cyan-500 mt-4 text-start text-sm'>
                            I am a Full-Stack developer based in Kollam, Kerala. I am a BCA undergraduate from Kerala University. I am now pursuing my MCA from Kerala University. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
                        </motion.p>
                        <h3 className='text-white mt-6'>
                            <span className='text-cyan-200 font-black text-xl'>Email: </span>heyananthulal@gmail.com
                        </h3>
                        <h3 className='text-white mt-4'>
                            <span className='text-cyan-200 font-black text-xl'>Place: </span>Kollam, Kerala 691572
                        </h3>
                        <div className='mt-12 sm:mt-8'>
                            <motion.div whileTap={{ scale: 0.93 }}>
                                <a
                                    className='text-white bg-cyan-500 rounded-xl p-3 w-28 sm:w-28 text-center inline-flex'
                                    href='https://drive.google.com/file/d/1DNAyRaRETLJunTgO_DgmMmm7hDkpgDuw/view?usp=sharing'>
                                    Resume
                                    <FaDownload className='ml-2 mt-1' />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Aboutsection;
