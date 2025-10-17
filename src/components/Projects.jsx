import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';
import ProjectCard from './ProjectCard';
import Loading from './Loading';
import projectsData from '../data/projects';

const Projects = () => {
    const { images, loading } = useFetchImages();

    return (
        <section className="py-20 bg-gray-900 text-white" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} images={images} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;