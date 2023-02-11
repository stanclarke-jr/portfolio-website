import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:hidden before:lg:block before:opacity-60 before:-top-[2rem] before:-left-3/4">
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
