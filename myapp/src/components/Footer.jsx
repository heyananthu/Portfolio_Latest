import React from 'react'
import { DiAngularSimple } from "react-icons/di";
import { FaWhatsapp, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-12">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    {/* Logo and Name */}
                    <a href="#" className="flex items-center justify-center space-x-3">
                        <DiAngularSimple size={48} className="text-cyan-500" />
                        <span className="self-center text-2xl sm:text-3xl font-semibold whitespace-nowrap dark:text-white">Ananthu</span>
                    </a>
                    {/* Social Icons */}
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li>
                            <a href="https://wa.me/918848898710" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <FaWhatsapp size={36} className="text-green-500" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/heyananthu?igsh=MWI4eDVvOWNkMzdoNA==" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <FaInstagram size={36} className="text-pink-500" />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/heyananthulal?t=5AoqNTNoe6_fIU1WYkHzUQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <FaTwitter size={36} className="text-white" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <FaGithub size={36} className="text-white" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="text-center text-cyan-600 font-black text-lg mt-6">
                    <span className="text-white">Designed by </span>Ananthu Lal 😎
                </p>
            </div>
        </footer>
    )
}

export default Footer
