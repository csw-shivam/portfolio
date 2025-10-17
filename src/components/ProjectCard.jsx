import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;