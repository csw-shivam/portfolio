import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Cinematic Portfolio</div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#hero" className="hover:text-gray-400 transition">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-400 transition">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;