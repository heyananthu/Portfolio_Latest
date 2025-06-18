import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { DiCss3, DiNpm } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap, FaJava, FaReact, FaNode } from "react-icons/fa6";
import { TbBrandTailwind, TbBrandFramerMotion, TbBrandMongodb } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { ImAndroid } from "react-icons/im";
import { GrMysql } from "react-icons/gr";
import { SiRedhat } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const IconWithAnimation = ({ IconComponent, color }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 1 }}
            animate={inView ? { rotate: 360, scale: 1 } : { scale: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                ease: "easeInOut"
            }}
            className={classNames('flex justify-center items-center', color)}
        >
            {/* Responsive icon size */}
            <IconComponent className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" />
        </motion.div>
    );
};

const Skills = () => {
    const icons = [
        { component: TiHtml5, color: 'text-orange-500' },
        { component: DiCss3, color: 'text-cyan-500' },
        { component: RiJavascriptFill, color: 'text-yellow-500' },
        { component: FaBootstrap, color: 'text-violet-500' },
        { component: TbBrandTailwind, color: 'text-cyan-500' },
        { component: DiNpm, color: 'text-red-800' },
        { component: FaJava, color: 'text-orange-500' },
        { component: FaReact, color: 'text-cyan-400' },
        { component: RiNextjsFill, color: 'text-grey-400' },

        { component: IoLogoNodejs, color: 'text-green-600' },
        { component: TbBrandFramerMotion, color: 'text-cyan-400' },
        { component: ImAndroid, color: 'text-green-600' },
        { component: GrMysql, color: 'text-blue-500' },
        { component: TbBrandMongodb, color: 'text-green-800' },
        { component: FaNode, color: 'text-green-600' },
        { component: SiRedhat, color: 'text-red-500' }
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h1 className='font-black text-4xl sm:text-5xl md:text-6xl mt-16 text-center text-cyan-500'>
                Skills <span className='text-white'>&</span> Tools
            </h1>
            <div
                className="
                    mt-12
                    grid
                    grid-cols-3
                    sm:grid-cols-4
                    lg:grid-cols-4
                    gap-6
                    sm:gap-8
                    md:gap-10
                    text-white
                    justify-items-center
                "
            >
                {icons.map((icon, index) => (
                    <IconWithAnimation
                        key={index}
                        IconComponent={icon.component}
                        color={icon.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
