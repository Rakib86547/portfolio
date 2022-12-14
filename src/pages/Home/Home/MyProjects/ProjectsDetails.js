import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const ProjectsDetails = ({ project }) => {
    const { img, title, details, project_id } = project;
    const {theme} = useContext(AuthContext);
    return (
        <div
            // style={{
            //     background: 'linear-gradient(145deg, #e2e8ec, #ffffff)'
            // }}
            className={`card shadow-xl border mt-16 ${theme ? 'border-slate-700' : 'border-gray-300'}`}>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body items-start">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{details}</p>
                <div className="">
                    <Link to={`/projects/${project_id}`}>
                        <p className='text-primary'>Explore More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;