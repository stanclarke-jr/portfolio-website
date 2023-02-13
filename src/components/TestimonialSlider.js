import { testimonials } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => {
          const { authorImg, authorText, authorName, authorPosition } =
            testimonial;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-12 lg:flex-row lg:gap-32">
                <div className="h-48 w-48 lg:h-[328px] lg:w-[328px]">
                  <img className="rounded-2xl" src={authorImg} alt="" />
                </div>
                <div className="flex max-w-3xl flex-col">
                  <h5 className="mb-8 font-body text-2xl font-normal italic">
                    {authorText}
                  </h5>
                  <div>
                    <p className="text-lg text-accent">{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
