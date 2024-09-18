import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import Dochub from '../assets/Dochub.png';
import Footer from './Footer';
import { FaDochub } from "react-icons/fa";

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="w-80 bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Linkedin</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-row flex-nowrap overflow-x-auto gap-7 justify-start items-stretch m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export const project = [
    {
        title: 'Dochub',
        description: 'A website which has enhanced user experience and need-satisfying Health portal',
        image: Dochub,  // Corrected image reference
        git: 'https://www.linkedin.com/in/monic-auditya-a-b8bb68295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        technologies: ['python', 'django', 'html', 'css', 'mongodb']
    },
    {
        title: 'ExploreEase',
        description: 'An all-in-one super app which satisfies all needs of tourism. Also mainly known for its Tour Recommendations',
        image: copeople,  // Corrected image reference
        git: 'https://www.linkedin.com/in/monic-auditya-a-b8bb68295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        technologies: ['MERN', 'Machine Learning']
    },
    {
        title: 'SocioScrap',
        description: 'A powerful tool which scrapes the criminals\' data and provides detailed reports of their crimes',
        image: vpn,  // Corrected image reference
        git: 'https://www.linkedin.com/in/monic-auditya-a-b8bb68295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        technologies: ['MERN', 'selenium', 'python', 'Deep learning']
    }
];

export default Projects;
