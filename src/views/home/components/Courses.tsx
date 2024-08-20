"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Keyboard } from "swiper/modules";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import VideoPopupModal from "@/components/Modal/VideoPopupModal";

const Courses = () => {
  const courseSwiperRef = useRef<any>();
  const [videoPopupModalOpen, setVideoPopupModalOpen] = useState(false);

  return (
    <section
      id="courses"
      className="bg-primary am:py-[75px] py-[81px] relative"
    >
      <div className="sm:container relative">
        {/* SHAPES */}
        <Image
          src="/assets/images/banner-svg-two.svg"
          alt="Banner Shapes"
          className="absolute sm:top-14 sm:left-28 -top-10 left-5"
          width={50}
          height={50}
        />
        <Image
          src="/assets/images/banner-svg-five.svg"
          alt="Banner Shapes"
          className="absolute sm:top-8 sm:right-28 -top-3 right-5"
          width={25}
          height={25}
        />

        {/* TITLE */}
        <div className="text-center mb-[50px] max-w-2xl mx-auto">
          <h2 className="title mb-2.5 text-white">
            Popular courses of the week
          </h2>
          <p className="description text-light-white w-[55%] mx-auto">
            List of the most popular lists that are often studied by our members
          </p>
        </div>
        {/* TITLE */}

        {/* COURSE SLIDER */}
        <div className="relative">
          <Swiper
            speed={1000}
            slidesPerView={1.3}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            onBeforeInit={(swiper) => {
              courseSwiperRef.current = swiper;
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
            {courses?.map((course, i) => (
              // COURSE SLIDE ITEM
              <SwiperSlide
                key={i}
                className="rounded-2xl min-h-[600px] bg-white"
              >
                <div className="relative">
                  {/* COURSE VIDEO BUTTON */}
                  <button
                    className="w-[60px] h-[60px] bg-white rounded-full grid place-items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse video-btn"
                    onClick={() => setVideoPopupModalOpen(true)}
                  >
                    <FaPlay className="text-primary" size={20} />
                  </button>

                  {/* COURSE IMAGE */}
                  <Image
                    src={`/assets/images/${course.image}.jpg`}
                    alt="Course Image"
                    width={420}
                    height={250}
                    className="w-full rounded-t-2xl"
                  />
                </div>

                {/* COURSE CONTENT */}
                <div className="sm:p-7 p-[18px] sm:pb-5 pb-3">
                  {/* TITLE */}
                  <h4 className="sm:text-2xl text-sm sm:leading-[36px] leading-[21px] text-[#2C2C2C] font-semibold">
                    {course.title}
                  </h4>

                  <div className="flex gap-5 justify-between items-center mt-5 mb-10">
                    {/* AUTHOR DETAILS */}
                    <div className="flex items-center gap-3">
                      {/* IMAGE */}
                      <Image
                        src={`/assets/images/${course.author.img}.png`}
                        alt="User"
                        width={45}
                        height={45}
                      />

                      {/* NAME AND POSITION */}
                      <div>
                        <p className="text-sm font-medium tex-[#2C2C2C] leading-[21px]">
                          {course.author.name}
                        </p>
                        <p className="text-[10px] leading-[15px] text-gray">
                          {course.author.position}
                        </p>
                      </div>
                    </div>

                    {/* COURSE STUDENTS */}
                    <div className="flex items-center gap-[6px]">
                      <span>
                        <FiUser size={35} className="text-primary" />
                      </span>
                      <div>
                        <p className="text-sm font-medium tex-[#2C2C2C] leading-[21px]">
                          {course.participant}
                        </p>
                        <p className="text-[10px] leading-[15px] text-gray">
                          Participant
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PRICING DETAILS AND BUY NOW BUTTON */}
                  <div className="flex items-center justify-between">
                    <Button
                      path="#"
                      className="font-semibold text-xs leading-[30px] px-6"
                    >
                      Buy Now
                    </Button>
                    <div className="flex items-end">
                      <h4 className="text-2xl leading-[36px] font-semibold text-[#2C2C2C]">
                        ${course.price}
                      </h4>
                      <p className="text-xs leading-[30px] text-gray">
                        /{course.videoCounts} Video
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* SLIDER NAVIGATION BUTTONS */}
          {/* LEFT BUTTON */}
          <button
            className="absolute sm:-left-7 left-5 top-1/2 -translate-y-1/2 z-[20] w-14 h-14 bg-white grid place-items-center text-2xl text-black border-[8px] border-solid border-[#F5F5F5] rounded-full shadow transition-all duration-500 hover:bg-primary hover:text-white active:scale-95"
            onClick={() => courseSwiperRef.current?.slidePrev()}
          >
            <GoArrowLeft />
          </button>
          {/* RIGHT BUTTON */}
          <button
            className="absolute sm:-right-7 right-5 top-1/2 -translate-y-1/2 z-[20] w-14 h-14 bg-white grid place-items-center text-2xl text-black border-[8px] border-solid border-[#F5F5F5] rounded-full shadow transition-all duration-500 hover:bg-primary hover:text-white active:scale-95"
            onClick={() => courseSwiperRef.current?.slideNext()}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>

      {/* COURSE VIDEO MODAL */}
      <VideoPopupModal
        open={videoPopupModalOpen}
        handleClose={() => setVideoPopupModalOpen(false)}
      />
    </section>
  );
};

export default Courses;

const courses = [
  {
    image: "course-img-one",
    title: "Basics of learning team management",
    author: {
      name: "Jone Owel",
      img: "author-one",
      position: "IT Manager",
    },
    participant: 120,
    price: 120,
    videoCounts: 25,
  },
  {
    image: "course-img-two",
    title: "Learn basic database structure and management",
    author: {
      name: "Roynaldo Jr",
      img: "author-two",
      position: "Data Science",
    },
    participant: 55,
    price: 128,
    videoCounts: 20,
  },
  {
    image: "course-img-three",
    title: "Create dynamic website with basic php",
    author: {
      name: "Markus Low",
      img: "author-three",
      position: "Programer",
    },
    participant: 98,
    price: 135,
    videoCounts: 20,
  },
  {
    image: "course-img-one",
    title: "Basics of learning team management",
    author: {
      name: "Jone Owel",
      img: "author-one",
      position: "IT Manager",
    },
    participant: 120,
    price: 120,
    videoCounts: 25,
  },
  {
    image: "course-img-two",
    title: "Learn basic database structure and management",
    author: {
      name: "Roynaldo Jr",
      img: "author-two",
      position: "Data Science",
    },
    participant: 55,
    price: 128,
    videoCounts: 20,
  },
  {
    image: "course-img-three",
    title: "Create dynamic website with basic php",
    author: {
      name: "Markus Low",
      img: "author-three",
      position: "Programer",
    },
    participant: 98,
    price: 135,
    videoCounts: 20,
  },
];
