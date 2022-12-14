import React from 'react';

const About = () => {
    return (
        <div id='about'>
            <h2 className='text-5xl text-center mt-16 font-bold'>ABOUT</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-[50%]'>
                        <img src="https://i.ibb.co/JykXqTF/IMG-20210418-152502-removebg-preview.png" alt='' />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className="text-4xl font-bold">About <span className='text-primary'>Me</span></h1>
                        <p></p>
                        <p className="py-6 text-md">As a Front-End Developer, I try to do my job properly. I always try to learn new things in this field. Development is my passion and it is my most important work. Above all, I try my best to complete my task</p>

                        <button className="btn btn-primary">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;