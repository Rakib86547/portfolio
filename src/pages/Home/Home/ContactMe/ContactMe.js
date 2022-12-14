import React, { useContext } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../../../../provider/AuthProvider';

const ContactMe = () => {
    const {theme} = useContext(AuthContext);
    const form = useRef();
    const openLinkInNewTab = url => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }
    const openLinkInNewTab1 = url => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const form1 = e.target;
        emailjs.sendForm('service_eo0wd4o', 'template_1tfiext', form.current, '7cRZeO70XBwcgTZYr')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Message Send Successfully');
                form1.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact'>
            <h1 className='text-5xl text-center font-bold mt-20'>CONTACT <span className='text-primary'>ME</span></h1>
            <div className="hero w-full">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="text-center lg:text-left w-[42%]">
                        <h1 className="text-4xl font-bold">Contact</h1>
                        <p className="py-6 text-xl">Connect with me via </p>
                        <p><strong>Phone: </strong>+880-1776386547</p>
                        <p><strong>Email: </strong>rakibb8040@gmail.com</p>
                        <div className='mt-10'>
                            <h3 className='font-bold text-xl mb-5'>Find With Me</h3>
                            <div className='flex justify-center lg:justify-between md:justify-between lg:w-[50px] md:w-[50px] sm:w-full'>
                              
                               <button 
                               onClick={() => openLinkInNewTab1('https://www.facebook.com/')}
                               className=' text-xl p-3 mr-2 rounded-full' 
                                ><FaFacebook /></button>
                               

                             
                              <button 
                              onClick={() => openLinkInNewTab('https://www.linkedin.com/in/rakib-khan-66623a221/')}
                                className=' text-xl p-3 rounded-full' 
                                ><FaLinkedin /></button>
                              
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-[58%]">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='user_name' placeholder="example@gmail.com" className="input input-bordered" />
                            </div>
                            <textarea name='message' className="textarea input-bordered  mt-2 " placeholder="write message"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;