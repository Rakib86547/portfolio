import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import banner from '../../../../assest/Banner.png';

// https://i.ibb.co/JykXqTF/IMG-20210418-152502-removebg-preview.png
const Banner = () => {
    return (
        <div className="hero flex justify-between items-center">
            <div className="hero-content flex-col lg:flex-row-reverse mt-24">
                <div className='lg:w-[45%]'>
                    <img className='w-[100%]' src={banner} alt='' />
                </div>
                <div className='lg:text-left lg:w-[50%] md:text-left text-center'>
                    <p className=' font-bold mb-3'>Welcome to my Portfolio</p>
                    <h1 className="text-5xl font-bold mb-4">Hi, I am <span className='text-primary'>Rakib Khan</span></h1>
                    <h2 className='text-4xl font-bold'>a {' '}
                        <span className=' font-bold text-4xl'>
                            <Typewriter
                                words={['FRONT-END DEVELOPER', 'REACT.JS DEVELOPER', 'MERN STACK DEVELOPER']}
                                loop={5}
                                cursor
                                cursorStyle='.|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h2>
                    <p className="py-6 text-md">I am a Web Developer. I am also experienced as a front-end developer.
                        I am an expert in HTML, CSS, Redux, React.js, Next.js, ES6, JavaScript, Daisy UI Tailwind CSS, Material UI.
                        I am use Node.js, Express.js, MongoDB and Mongoose for the Back-end Develop and for Authentication I use Firebase and JWT.
                        </p>
                    <button className="btn btn-primary"><a href='https://drive.google.com/u/0/uc?id=1oplitIYRv8mBLXjt4MEyB03rchCAQCcl&export=download' download={"Rakib-Khan-resume.pdf"}>Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;