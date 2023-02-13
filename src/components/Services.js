import { services } from '../data';

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* Title*/}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:-top-[2rem] before:-left-28 before:hidden before:opacity-40 before:content-services before:lg:block">
            What I do clients
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            asperiores aspernatur facere aperiam? Laboriosam corrupti tempora,
            nisi numquam cumque consequatur.
          </p>
        </div>
        {/* Services grid */}
        <div className="grid gap-8 lg:grid-cols-4">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div key={index} className="rounded-2xl bg-secondary p-6">
                {/* Service icon */}
                <div className="mb-24 flex h-12 w-12 items-center justify-center rounded-sm text-[28px] text-accent">
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
