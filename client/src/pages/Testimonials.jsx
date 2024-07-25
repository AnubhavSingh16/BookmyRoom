import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const TestimonialSlide = ({ text, author, role, image }) => {
  return (
    <div
      className="p-4 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg  flex flex-col items-center bg-slate-700 text-white bg-gradient-to-r from-slate-900 to-slate-600 "
      style={{ width: "300px", height: "370px", overflow: "hidden" }}
    >
      <div className="w-full sm:w-50 sm:h-35 md:w-45 md:h-24 lg:w-48 lg:h-32">
        <img
          alt="testimonial"
          className="h-full w-full object-cover rounded-full border-2 border-gray-200 bg-gray-100 sm:object-cover sm:rounded-full"
          src={image}
        />
      </div>

      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ maxHeight: "8rem", overflow: "hidden" }}
      >
        <p className="leading-relaxed mb-4 text-lg sm:text-xl md:text-lg lg:text-lg overflow-hidden font-light pb-8">
          {text}
        </p>
      </div>

      <div>
        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-1 mb-1"></span>
      </div>

      <div>
        <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">
          {author}
        </h2>
        <p className="text-gray-300">{role}</p>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <div>
      <section className="">
        <div className="container mx-auto px-5 py-10">
          <h1 className="text-center text-4xl font-bold text-black font-mono bg-yellow-600">
            Testimonials
          </h1>
          <h2 className="text-center text-2xl font-semibold mb-10 font-mono">
            What our <span className="text-green-700">customers</span> are
            saying
          </h2>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper" 
            >
              <SwiperSlide>
                <TestimonialSlide
                  text="Excellent service and cozy rooms."
                  author="Anubhav Singh"
                  role="Full stack Dev."
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="Friendly host and lovely home."
                  author="Madhav Kaushik"
                  role="Software Engineer"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="Outstanding amenities and great value"
                  author="Harsh kumar"
                  role="Project Manager"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="A seamless booking experience."
                  author="Alice snow"
                  role="Graphic Designer"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;

/*
function Testimonial() {
  return (
    <div>
      <section className=''>
        <div className="container mx-auto px-5 py-10">
          <h1 className='text-center text-4xl font-bold text-black font-mono'>Testimonial</h1>
          <h2 className='text-center text-2xl font-semibold mb-10  font-mono'>
            What our <span className='text-green-700'>customers</span> are saying
          </h2>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              
              breakpoints={{
                
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}

              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <TestimonialSlide
                  text="Excellent service and cozy rooms."
                  author="Anubhav Singh"
                  role="Full stack Dev."
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="Friendly host and lovely home."
                  author="Madhav Kaushik"
                  role="Software Engineer"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="Outstanding amenities and great value"
                  author="Harsh kumar"
                  role="Project Manager"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialSlide
                  text="A seamless booking experience."
                  author="Alice snow"
                  role="Graphic Designer"
                  image="https://cdn-icons-png.flaticon.com/128/147/147144.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
*/
