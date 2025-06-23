// import React from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import MovingText from 'react-moving-text'
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_772ac7a', 'template_v6hktam', form.current, {
                publicKey: 'v_pPiFZJwuN_RUT2m',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Sended..')
                    setLoading(false)
                    // setShowSuccessMessage(true);
                    // setTimeout(() => {
                    //     setShowSuccessMessage(false);
                    // }, 10000); // hide the message after 3 seconds
                    // window.location.replace(window.location.href); 
                    window.location.replace(window.location.href)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email. Please try again.');
                },
            );
    };

    return (
        <div>
            <Toaster />
            <section class="mt-20">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get in <span className='text-cyan-500'>Touch</span></h2>
                    {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                    <form ref={form} onSubmit={sendEmail} class="space-y-8 mt-12 relative z-20">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" name="user_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required></input>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" name="user_email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email" required></input>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" value="send" class="py-3 px-12 text-sm font-medium text-center text-white rounded-lg bg-cyan-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={() => setLoading(true)}
                        >
                            {
                                loading ? (
                                    <div className='flex gap-3'>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Sending...
                                    </div>
                                ):("Send message")
                            }
                            </button>
                    </form>
                </div>
            </section>

            {/* Your form and other components */}

            {/* {showSuccessMessage && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-500"
                    style={{ zIndex: 1000 }} >
                    <MovingText
                        type="bounce"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <div
                            className="dark:bg-gray-700 rounded-xl p-4 shadow-md text-center  border-none border-4  border-cyan-500"
                            style={{ maxWidth: 300 }}
                        >
                            <p className="text-cyan-400 whitespace-nowrap  text-xl">Email sent successfully!</p>
                            <button
                                className="bg-cyan-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-2xl mt-2"
                                onClick={() => window.location.replace(window.location.href)}
                            >
                                Okey
                            </button>
                        </div>
                    </MovingText>
                </div>
            )
            } */}

        </div >
    )
}

export default Contact;
