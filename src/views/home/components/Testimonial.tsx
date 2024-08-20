"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Keyboard } from "swiper/modules";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonialSwiperRef = useRef<any>();

  return (
    <section id="testimonial" className="sm:py-[87px] py-[62px] bg-[#F8F8F8]">
      <div className="container">
        <div className="text-center mb-[50px] max-w-2xl mx-auto">
          <h2 className="title mb-2.5">
            What do they <span>say?</span>
          </h2>
          <p className="description">
            This is an honest review from members who have joined us
          </p>
        </div>

        <div className="relative">
          <Swiper
            speed={1000}
            slidesPerView={1}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            roundLengths={true}
            loop={true}
            onBeforeInit={(swiper) => {
              testimonialSwiperRef.current = swiper;
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Keyboard]}
            className="mySwiper grid grid-cols-3 gap-5"
          >
            {testimonialData?.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="grid place-items-center text-center p-12 pb-2.5">
                  <Image
                    src={`/assets/images/${testimonial.image}.png`}
                    alt="Testimonial Image"
                    width={75}
                    height={75}
                  />

                  <ul className="flex items-center gap-2 text-[#FF9100] mt-4 mb-6">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <li key={i}>
                        <FaStar size={15} />
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-2xl leading-9 text-[#2C2C2C]">
                    {testimonial.name}
                  </h4>

                  <p className="description mt-2.5">
                    {testimonial.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-5 sm:mt-[50px] mt-5">
            <button
              className="z-[200] w-[54px] h-[54px] bg-white grid place-items-center text-2xl text-black rounded-full border-[8px] border-solid border-[#F5F5F5] transition-all duration-500 hover:bg-secondary hover:text-white active:scale-95"
              onClick={() => testimonialSwiperRef.current?.slidePrev()}
            >
              <GoArrowLeft />
            </button>

            <button
              className="z-[200] w-[54px] h-[54px] bg-white grid place-items-center text-2xl text-black rounded-full border-[8px] border-solid border-[#F5F5F5] transition-all duration-500 hover:bg-secondary hover:text-white active:scale-95"
              onClick={() => testimonialSwiperRef.current?.slideNext()}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const testimonialData = [
  {
    image: "testimonial-img-one",
    name: "Jason Bay",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    image: "testimonial-img-two",
    name: "Nany Brugman",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    image: "testimonial-img-three",
    name: "Alexa Nowan",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    image: "testimonial-img-one",
    name: "Jason Bay",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    image: "testimonial-img-two",
    name: "Nany Brugman",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    image: "testimonial-img-three",
    name: "Alexa Nowan",
    description:
      "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
];
