import React, { useEffect, useState } from 'react';
import ProjectsDetails from './ProjectsDetails';

const MyProjects = () => {
   
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data)
        })
    }, [])
    return (
        <div className='mt-11' id='project'>
            <div className='mt-20 text-center'>
                <h1 className='text-5xl font-bold text-center'>MY PROJECTS</h1>
            </div>
            <div className='grid gap-5 lg:grid-cols-3'>
                {
                    projects.map((project, i) => <ProjectsDetails
                        key={i}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default MyProjects;