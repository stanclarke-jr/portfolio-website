import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials before:hidden before:absolute relative before:opacity-40 before:lg:block before:-top-[2rem] before:-left-64">
            What my clients say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            ratione minima, cum non a recusandae autem ad natus reprehenderit
            quas blanditiis omnis et! Expedita labore eveniet dolorum nihil
            laboriosam. Cupiditate?
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
