import '../../../../App.css';

const ProjectsSummary = ({ project }) => {
    const {img, github_link, live_link, feature1, feature2, feature3, feature4, feature5} = project;
    const openLinkInNewTab = (live_link) => {
        const newTab = window.open(live_link, '_blank', 'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }
    const openLinkInNewTab1 = (github_link) => {
        const newTab = window.open(github_link, '_blank', 'noopener,noreferrer');
        if (newTab) newTab.opener = null
    }
    return (
        <div className="project-wrapper">
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-3 pt-36  h-[100%] w-[100%]'>
            <figure className='shadow-xl rounded-md h-[100%] w-[100%]'><img className='h-full rounded-md' src={img.img1} alt="Shoes" /></figure>
            <figure className='shadow-xl rounded-md h-[100%] w-[100%]'><img className='h-full rounded-md' src={img.img2} alt="Shoes" /></figure>
            <figure className='shadow-xl rounded-md h-[100%] w-[100%]'><img className='h-full rounded-md' src={img.img3} alt="Shoes" /></figure>
            </div>  
            <div className="card mx-auto">
                
                <div className="card-body">
                    <h2 className="card-title"><li>{feature1}</li></h2>
                    <h2 className="card-title"><li>{feature2}</li></h2>
                    <h2 className="card-title"><li>{feature3}</li></h2>
                    <h2 className="card-title"><li>{feature4}</li></h2>
                    <h2 className="card-title"><li>{feature5}</li></h2>
                    <div className="card-actions justify-end">
                        <button 
                        onClick={() => openLinkInNewTab(live_link)} 
                         className="badge badge-outline">Visit Website</button>

                        <button 
                        onClick={() => openLinkInNewTab1(github_link)} 
                        className="badge badge-outline">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSummary;