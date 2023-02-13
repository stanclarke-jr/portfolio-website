import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        {/* Image */}
        <div className="flex flex-col gap-24 xl:flex-row">
          <img
            className="h-full w-[566px] rounded-2xl object-cover md:mx-auto lg:mx-0"
            src={Image}
            alt=""
          />
          {/* About content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="relative mb-3 text-3xl font-medium before:absolute before:-top-[2rem] before:hidden before:opacity-40 before:content-about lg:text-4xl lg:font-extrabold before:lg:block">
                Jane Doe
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opacity-10" />
              <p className="mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt facere saepe, cum, omnis totam provident aliquam ea
                numquam ad sint in optio iure laudantium molestiae!
              </p>
            </div>
            <button className="btn btn-md bg-accent transition-all hover:bg-accent-hover">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
