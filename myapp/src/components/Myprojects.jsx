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

  // Project data for easier mapping
  const projects = [
    {
      ref: ref1,
      controls: controls1,
      img: Olxclone,
      title: "Olx Clone",
      desc: "Olx clone built with React, Bootstrap, and Firebase",
      link: "https://66a260392cc9dc3c6152e409--illustrious-bubblegum-e89747.netlify.app/"
    },
    {
      ref: ref2,
      controls: controls2,
      img: Netflixclone,
      title: "NetFlix Clone",
      desc: "Netflix clone built with React, Bootstrap, and TMDb APIs.",
      link: "https://669cabd2017118254bb7cd24--thriving-truffle-729d42.netlify.app/"
    },
    {
      ref: ref3,
      controls: controls3,
      img: chatApp,
      title: "Chat App",
      desc: "Chat Application built in MERN Stack.",
      link: "https://chatapp-2025-1-frondend.onrender.com/"
    }
  ];

  return (
    <div className="mt-20 px-4 max-w-screen-xl mx-auto" ref={ref} id="projects">
      <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl text-center">
        <span className="text-cyan-500">My</span> Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, idx) => (
          <div ref={project.ref} key={idx} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={project.controls}
              transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.5 }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg w-full h-56 object-cover" src={project.img} alt={project.title} />
              </a>
              <div className="p-5 flex-1 flex flex-col">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-auto"
                >
                  visit
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Myprojects
