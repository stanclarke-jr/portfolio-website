/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { projectsData, projectsNav } from '../data';

import Project from './Project';

const Projects = () => {
  const [filter, setFilter] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

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

  const handleClick = (e, index) => {
    setFilter({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* Projects nav */}
      <nav className="mx-auto mb-12 max-w-xl">
        <ul className="flex flex-col items-center justify-evenly text-white md:flex-row">
          {projectsNav.map((category, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } m-4 cursor-pointer capitalize`}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Projects grid */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
