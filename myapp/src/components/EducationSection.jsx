import React from 'react'
import Lottie from 'lottie-react'
import Educationanim from './assets/Educationanimi.json'
import Educationone from './assets/Education1.json'
import Snit from './assets/Snit.jpg'
import Snct from './assets/snct.jpeg'
import { motion } from 'framer-motion'

function EducationSection() {
    return (
        <section className='mt-16 px-4 max-w-screen-xl mx-auto'>
            {/* Header Section */}
            <div className='flex justify-center items-center'>
                {/* Lottie Animation */}
                {/* <div className="">
                    <Lottie className='w-32 sm:w-48' animationData={Educationanim} />
                </div> */}
                {/* Heading */}
                <div>
                    <h1 className='text-white font-black text-4xl sm:text-5xl md:text-7xl'>
                        <span className="text-cyan-500">E</span>ducatio<span className='text-cyan-500'>n</span>
                    </h1>
                </div>

            </div>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row items-center gap-12 mt-12'>
                {/* Left Side Animation */}
                <div className='flex justify-center w-full '>
                    <Lottie className='w-64 sm:w-80' animationData={Educationone} />
                </div>
                {/* Education Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="flex flex-col gap-6 w-full "
                >
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="object-cover w-full md:w-48 h-48 md:h-48"
                            src={Snit}
                            alt="Sree Narayana College of Technology"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-center">
                            <h2 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Bachelors of Computer Application
                            </h2>
                            <h3 className='text-gray-700 dark:text-white'>Sree Narayana College of Technology</h3>
                            <p className="text-cyan-500 font-black mt-4">2017-2020 | Completed</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="object-cover w-full md:w-48 h-48 md:h-48"
                            src={Snct}
                            alt="Sree Narayana Institute of Technology"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-center">
                            <h2 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Master's of Computer Application
                            </h2>
                            <h3 className='text-gray-700 dark:text-white'>Sree Narayana Institute of Technology</h3>
                            <p className="text-cyan-500 font-black mt-4">2022-2024 | Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default EducationSection
