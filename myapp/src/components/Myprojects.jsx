import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Netflixclone from './assets/netflixclone.jpg'
import Olxclone from './assets/olx clone.jpg'
import chatApp from './assets/chatapp.jpg'
import greets from './assets/project/greets-project.png'
import netspoc from './assets/project/netspoc.png'
import vinya from './assets/project/vinya.png'
import alaigram from './assets/project/alaigram-project.png'
import alaigramfrondend from './assets/project/alaigram-frondend.png'
import christmas from './assets/project/christmasfriend.webp'
import voicene from './assets/project/voicene-project.png'
const Myprojects = React.forwardRef((props, ref) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
  const controls10 = useAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);


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
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls4.start({ opacity: 1, y: 0 });
        } else {
          controls4.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );
    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls5.start({ opacity: 1, y: 0 });
        } else {
          controls5.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );
    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls6.start({ opacity: 1, y: 0 });
        } else {
          controls6.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );
    const observer7 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls7.start({ opacity: 1, y: 0 });
        } else {
          controls7.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );
    const observer8 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls8.start({ opacity: 1, y: 0 });
        } else {
          controls8.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );
    const observer9 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls9.start({ opacity: 1, y: 0 });
        } else {
          controls9.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );

    const observer10 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls10.start({ opacity: 1, y: 0 });
        } else {
          controls10.start({ opacity: 0, y: 100 });
        }
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);
    if (ref5.current) observer5.observe(ref5.current);
    if (ref6.current) observer6.observe(ref6.current);
    if (ref7.current) observer7.observe(ref7.current);
    if (ref8.current) observer8.observe(ref8.current);
    if (ref9.current) observer9.observe(ref9.current);
    if (ref10.current) observer10.observe(ref10.current);
    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
      if (ref4.current) observer4.unobserve(ref4.current);
      if (ref5.current) observer5.unobserve(ref5.current);
      if (ref6.current) observer6.unobserve(ref6.current);
      if (ref7.current) observer7.unobserve(ref7.current);
      if (ref8.current) observer8.unobserve(ref8.current);
      if (ref9.current) observer9.unobserve(ref9.current);
      if (ref10.current) observer10.unobserve(ref10.current);


    };
  }, [controls1, controls2, controls3]);

  // Project data for easier mapping
  const frontendProjects = [
    {
      ref: ref4,
      controls: controls4,
      img: greets,
      title: "Greets",
      desc: "Frontend Project built in ReactJS , Tailwind CSS.",
      link: "https://www.greets.co.in/"
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
      ref: ref9,
      controls: controls9,
      img: voicene,
      title: "Voicene Frontend",
      desc: "Our Company site , built in html, tailwind css and javascript.",
      link: "https://voicene.com/"
    },
    {
      ref: ref5,
      controls: controls5,
      img: netspoc,
      title: "Netspoc",
      desc: "Frontend Project built in ReactJS , Tailwind CSS.",
      link: "https://www.netspoc.com/"
    },
    {
      ref: ref6,
      controls: controls6,
      img: vinya,
      title: "Vinya Logistics",
      desc: "Frontend Project built in Wordpress",
      link: "https://www.vinyalogistics.com/"
    },
    {
      ref: ref8,
      controls: controls8,
      img: alaigramfrondend,
      title: "Alaigram Frontend",
      desc: "Frontend Project built in ReactJS and Tailwind CSS.",
      link: "https://alaigram.vercel.app/"
    },

  ];

  const fullstackProjects = [
    {
      ref: ref1,
      controls: controls1,
      img: Olxclone,
      title: "Olx Clone",
      desc: "Olx clone built with React, Bootstrap, and Firebase",
      link: "https://66a260392cc9dc3c6152e409--illustrious-bubblegum-e89747.netlify.app/"
    },


    {
      ref: ref7,
      controls: controls7,
      img: alaigram,
      title: "Alaigram",
      desc: "Ecommerce Project built in Shopify.",
      link: "https://www.alaigram.com/"
    },
    {
      ref: ref10,
      controls: controls10,
      img: christmas,
      title: "Christmas Friend Finder App",
      desc: "Built a Christmas finder application using MERN, Tailwind, Nodemailer, Bervo",
      link: "https://christmas-friend-finder-app.onrender.com/"
    },
    {
      ref: ref3,
      controls: controls3,
      img: chatApp,
      title: "Chatty",
      desc: "Built a real-time one-to-one chat application using MERN, Socket.io, Zustand, Tailwind CSS, and Cloudinary.",
      link: "https://real-chat-app-2025-1.onrender.com/"
    },
  ].reverse();

  return (
    <div className="mt-20 px-4 max-w-screen-xl mx-auto" ref={ref} id="projects">
      <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl text-center">
        <span className="text-cyan-500">My</span> Projects
      </h1>

      <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center mt-12 underline decoration-cyan-500 italic"><span className='text-cyan-500'>F</span>rontend <span className='text-cyan-500'>P</span>rojects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {frontendProjects.map((project, idx) => (
          <div ref={project.ref} key={idx} className="flex justify-center z-10">
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

      <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center mt-12 italic underline decoration-cyan-500"><span className='text-cyan-500'>F</span>ull <span className='text-cyan-500'>S</span>tack <span className='text-cyan-500'>P</span>rojects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {fullstackProjects.map((project, idx) => (
          <div ref={project.ref} key={idx} className="flex justify-center z-10">
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
