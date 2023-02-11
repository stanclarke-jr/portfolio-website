import { skills } from '../data';

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex justify-evenly">
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
