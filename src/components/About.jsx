import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-900 text-white py-20" id="about">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-4">
                    I am a passionate developer with a love for creating stunning and functional web applications. My journey in tech began with a fascination for problem-solving and a desire to bring ideas to life through code.
                </p>
                <p className="text-lg mb-4">
                    With a background in both design and development, I strive to create seamless user experiences that are not only visually appealing but also highly functional. I enjoy collaborating with others and continuously learning new technologies to enhance my skill set.
                </p>
                <p className="text-lg">
                    In my spare time, I love exploring the latest trends in technology, contributing to open-source projects, and sharing my knowledge with the community.
                </p>
            </div>
        </section>
    );
};

export default About;