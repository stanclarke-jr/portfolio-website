import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        {/* Image */}
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          {/* About content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Jane Doe
              </h2>
              <p className="text-accent mb-4">Freelance Web Developer</p>
              <hr className="mb-8 opacity-10" />
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt facere saepe, cum, omnis totam provident aliquam ea
                numquam ad sint in optio iure laudantium molestiae!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
