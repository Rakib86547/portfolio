import { useLoaderData } from 'react-router-dom';
import ProjectsSummary from './ProjectsSummary';
import '../../../../App.css';


const Projects = () => {
   const projects = useLoaderData()
    return (
        <div className='max-w-[1240px] mx-auto'>
            {
                projects.map(project => <ProjectsSummary
                    key={project._id}
                    project={project}
                    />)
            }
        </div>
    );
};

export default Projects;