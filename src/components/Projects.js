import React from 'react';
import './Projects.css'
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Web Development',
    description: 'Create a dynamic website for a clients business, incorporating features such as e-commerce, user authentication, and content management.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9JLv28KfGVj3pixFOALRk6TKWWgQGM-tlO3ZGmsCT9MeHvXYjMhDV4UYsuGzX14QLpk&usqp=CAU', 
  },
  {
    title: 'Blockchain Development',
    description: 'Create decentralized applications (DApps) and smart contracts using blockchain technology for secure and transparent transactions.',
    image: 'https://www.cryptotimes.io/wp-content/uploads/2022/11/BLOCKCHAIN-DEVELOPMENT-3.jpg.webp', 
  },
  {
    title: 'Data Analysis and Visualization',
    description: 'Analyze large datasets to extract meaningful insights and create interactive data visualizations for decision-makers.',
    image: 'https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2023-01/Data%20Visualization.png', 
  },
  {
    title: 'Cybersecurity and Network Security',
    description: 'Secure an organization network infrastructure, data, and systems from cyber threats through measures like penetration testing and firewall management.',
    image: 'https://intellipaat.com/blog/wp-content/uploads/2021/07/Cyber-Security-vs-Network-Security-Big-1.jpg', 
  },
  {
    title: 'Cloud Computing and Migration',
    description: 'Migrate an organizations on-premises infrastructure to a cloud platform like AWS, Azure, or Google Cloud for improved scalability and cost-efficiency.',
    image: 'https://inzint.com/wp-content/uploads/2023/02/7-Benefits-of-Cloud-Migration-1.jpg', 
  },
  {
    title: 'Machine Learning and AI',
    description: 'Develop machine learning models and artificial intelligence algorithms to automate processes, make predictions, or enhance user experiences.',
    image: 'https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png', 
  },
  {
    title: 'IoT (Internet of Things) Project',
    description: 'Build IoT solutions that connect physical devices to the internet, allowing data collection and control remotely, e.g., smart home systems.',
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg', 
  },
];

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
    
  );
}

export default Projects;
