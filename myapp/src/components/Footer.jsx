import React from 'react'
import { DiAngularSimple } from "react-icons/di";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer class="bg-white rounded-lg shadow dark:bg-gray-900 ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <DiAngularSimple size={60} className='text-cyan-500'/>                          
                          <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Ananthu</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://wa.me/918848898710" class="hover:underline me-4 md:me-6"><FaWhatsapp size={40} className='text-green-500 mt-4' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/heyananthu?igsh=MWI4eDVvOWNkMzdoNA==" class="hover:underline me-4 md:me-6"><FaInstagram size={40} className='text-pink-500 mt-4 ml-4' /></a>
                            </li>
                            <li>
                                <a href="https://x.com/heyananthulal?t=5AoqNTNoe6_fIU1WYkHzUQ&s=09" class="hover:underline me-4 md:me-6"><FaTwitter size={40} className='text-white mt-4 ml-4' /></a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline"><FaGithub size={40} className='text-white  ml-4' /></a>
                            </li>
                        </ul>
                    </div>
                    <p className='text-center text-cyan-600 font-black text-xl'><span className='text-white'>Designed by </span>Ananthu Lal😎</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
