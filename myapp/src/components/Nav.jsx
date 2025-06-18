import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Lottie from "lottie-react";
import animationconfig from './assets/Va3esHS4ga.json';
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", to: "Section1" },
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Education", to: "Education" },
    { name: "Contact", to: "Contact" },
];

const Nav = () => {
    const [nav, setNav] = useState(false);

    // Close menu on link click (mobile)
    const handleLinkClick = () => setNav(false);

    return (
        <nav className="bg-black text-white w-full shadow-md py-6">
            <div className="flex justify-between items-center h-20 max-w-screen-xl mx-auto px-4">
                {/* Logo and Animation */}
                <div className="flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: 0.8,
                        }}
                    >
                        <Lottie
                            className="w-24 sm:w-32 md:w-28 mt-2 sm:mt-3"
                            animationData={animationconfig}
                        />
                    </motion.div>
                    <h1 className="font-black text-3xl sm:text-5xl text-cyan-400 ml-2 hidden sm:block">
                        A<span className="text-white">nanthu</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={`#${link.to}`}
                                className="p-2 text-xl text-cyan-500 font-black cursor-pointer hover:text-cyan-300 transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div
                    onClick={() => setNav(!nav)}
                    className="md:hidden cursor-pointer z-50"
                >
                    {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {/* Backdrop */}
            {nav && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setNav(false)}
                ></div>
            )}

            {/* Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-black border-r border-slate-500 z-50 transform ${nav ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <h1 className="font-bold text-3xl text-green-500 m-6 mb-2">Quick Links</h1>
                <ul className="uppercase">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={`#${link.to}`}
                                className="p-4 border-b border-b-white text-sky-400 font-bold cursor-pointer hover:bg-slate-800"
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
