/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { projectsData, projectsNav } from '../data';

import Project from './Project';

const Projects = () => {
  const [filter, setFilter] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(false);

  console.log(filter.name);

  useEffect(() => {
    // Fetch projects based on filter
    if (filter.name === 'all') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === filter.name;
      });
      setProjects(filteredProjects);
    }
  }, [filter]);

  return (
    <div>
      {/* Projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Projects;
