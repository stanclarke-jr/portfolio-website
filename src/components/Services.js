import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* Title*/}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:hidden before:opacity-40 before:-top-[2rem] before:-left-28 before:lg:block">
            What I do clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            asperiores aspernatur facere aperiam? Laboriosam corrupti tempora,
            nisi numquam cumque consequatur.
          </p>
        </div>
        {/* Services grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div key={index} className="bg-secondary p-6 rounded-2xl">
                {/* Service icon */}
                <div className="text-accent rounded-sm h-12 w-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
