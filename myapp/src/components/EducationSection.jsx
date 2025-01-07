import React from 'react'
import Lottie from 'lottie-react'
import Educationanim from './assets/Educationanimi.json'
import Educationone from './assets/Education1.json'
import Snit from './assets/Snit.jpg'
import Snct from './assets/snct.jpeg'
import {motion} from 'framer-motion'
function EducationSection() {
    return (
        <div className='mt-12 sm:ml-24'>
            <div className='flex'>
                <div className='absolute left-1'>
                    <Lottie className='w-48  sm:w-48 sm:absolute sm:left-96 sm:ml-20' animationData={Educationanim} />
                </div>
                <div className='ml-24'>
                    <h1 className='text-white ml-6 font-black  text-5xl mt-8  md:text-7xl sm:absolute sm:left-96 sm:ml-48' ><span className="text-cyan-500 text-7xl">E</span>ducatio<span className='text-cyan-500'>n</span></h1>
                </div>
            </div>
            <div className='sm:flex sm:mt-28'>
                <div className='mt-24 ml-9 sm:ml-1 sm:w-52'>
                    <Lottie className='w-80 sm:w-98 sm:ml-20' animationData={Educationone} />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                    }
                    }
                    className="sm:ml-96 relative z-20">
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl sm:mt-20 mt-24  dark:border-gray-700  dark:bg-black  sm:animate-bounce sm:focus:animate sm:hover:animate">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded md:rounded-s-lg sm:ml-4 " src={Snit} alt=""></img>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bachelors of Computer Application</h2>
                            <h3 className='text-white'>Sree Naryana College of Tecchnology</h3>
                            <p class="text-cyan-500 font-black mt-4 ">2017-2020 | Completed</p>
                        </div>
                    </a>
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mt-2  dark:border-gray-700  dark:bg-black    sm:animate-bounce sm:focus:animate sm:hover:animate">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded md:rounded-s-lg sm:ml-4" src={Snct} alt=""></img>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Master's of Computer Application</h5>
                            <h3 className='text-white'>Sree Naryana Institute of Tecchnology</h3>
                            <p class="text-cyan-500 font-black mt-4">2022-2024 | pursuing</p>
                        </div>
                    </a>
            </motion.div>
        </div>
        </div >
    )
}

export default EducationSection
