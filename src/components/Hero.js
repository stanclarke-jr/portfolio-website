import WomanImg from '../assets/img/banner-woman2.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center overflow-hidden bg-primary py-32 lg:h-[85vh] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0"
    >
      <div className="container mx-auto h-full">
        <div className="flex h-full items-center pt-8">
          {/* Left content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className="mb-[22px] text-lg text-accent">Hey, I'm Jane 👋</p>
            <h1 className="text-center text-4xl font-bold leading-[44px] md:text-5xl md:leading-tight md:tracking-[-2px] lg:text-left lg:text-7xl lg:leading-[1.2]">
              I Build <br /> Websites.
            </h1>
            <p className="max-w-[480px] pt-4 pb-8 text-center text-lg md:pt-6 md:pb-12 lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, laboriosam.
            </p>
            <button className="btn btn-md md:btn-lg bg-accent transition-all hover:bg-accent-hover">
              Let's work together
            </button>
          </div>
          {/* Right content */}
          <div className="hidden h-full flex-1 items-end justify-end lg:flex">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
