import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section min-h-[1400px] bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:-top-[2rem] before:-left-3/4 before:hidden before:opacity-60 before:content-portfolio before:lg:block">
            My latest work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            facere autem! Dolores asperiores tenetur voluptas vero explicabo eos
            labore provident?
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
