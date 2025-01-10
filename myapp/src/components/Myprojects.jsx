import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Netflixclone from './assets/netflixclone.jpg'
import Olxclone from './assets/olx clone.jpg'
import chatApp from './assets/chatapp.jpg'
const Myprojects = React.forwardRef((props, ref) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, y: 0 });
        } else {
          controls1.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start({ opacity: 1, y: 0 });
        } else {
          controls2.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start({ opacity: 1, y: 0 });
        } else {
          controls3.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
    };
  }, [controls1, controls2, controls3]);

  return (
    <div className="mt-20" ref={ref} id="projects">
      <h1 className="text-white font-black text-5xl text-center">
        <span className="text-cyan-500">My</span> Projects
      </h1>
      <div className="sm:flex sm:ml-24 sm:mt-12 relative z-20 ml-4">
        <div ref={ref1} className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controls1}
            transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.5 }}
            className="max-w-sm mt-12  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={Olxclone} alt="Netflix Clone" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Olx Clone</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Olx clone built with React, Bootstrap, and Firebase</p>
              <a href="https://66a260392cc9dc3c6152e409--illustrious-bubblegum-e89747.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                visit
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <div ref={ref2} className="w-full max-w-md mt-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controls2}
            transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.5 }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={Netflixclone} alt="Netflix Clone" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NetFlix Clone</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Netflix clone built with React, Bootstrap, and TMDb APIs.</p>
              <a href="https://669cabd2017118254bb7cd24--thriving-truffle-729d42.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                visit
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <div ref={ref3} className="w-full max-w-md mt-12 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controls3}
            transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.5 }}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:h-[22.5rem]"
          >
            <a href="#">
              <img className="rounded-t-lg sm:h-[11.5rem] sm:w-full" src={chatApp} alt="Netflix Clone" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chat App</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Chat Application built in MERN Stack.</p>
              <a href="https://chatapp-2025-1-frondend.onrender.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                visit
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
})

export default Myprojects
