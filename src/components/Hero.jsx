import React from 'react';

const Hero = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Your Name</h1>
                <p className="text-lg mb-8">A brief bio about yourself, your passions, and what you do.</p>
                <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;