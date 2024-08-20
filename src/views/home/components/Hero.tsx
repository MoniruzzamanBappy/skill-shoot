import Image from "next/image";
import Link from "next/link";
import { FaArrowUp, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

import Button from "../../../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="bg-primary w-full relative">
      <Image
        src="/assets/images/hero-icon-one.svg"
        alt="Hero Shapes"
        className="absolute left-5 top-20 inline-block sm:hidden"
        width={60}
        height={60}
      />
      <Image
        src="/assets/images/hero-icon-two.svg"
        alt="Hero Shapes"
        className="absolute left-5 bottom-20 inline-block sm:hidden"
        width={60}
        height={60}
      />
      <Image
        src="/assets/images/hero-icon-three.svg"
        alt="Hero Shapes"
        className="absolute right-5 bottom-6 inline-block sm:hidden"
        width={60}
        height={60}
      />

      <div className="container sm:pt-[164px] pt-[131px]">
        <div className="flex items-start justify-between gap-20">
          <div className="sm:pb-[86px] pb-14 xl:w-1/2 flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-left">
            <h1 className="sm:text-[60px] text-[28px] sm:leading-[90px] leading-[42px] font-semibold text-white">
              There is{" "}
              <span className="relative after:content-[' '] after:bg-[url('/assets/images/title-bottom-shape.svg')] after:bg-no-repeat after:w-full after:h-5 after:absolute after:-bottom-4 after:left-0">
                always
              </span>{" "}
              something new for us to learn
            </h1>
            <p className="text-light-white sm:text-lg text-xs sm:leading-[35px] leading-[30px] mt-2.5 mb-8">
              we have created more than 100+ materials on various things that
              will help your career, with mentors who are experienced in their
              fields.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:gap-5 gap-[30px]">
              <Button path="#" variant="secondary">
                Start Journey{" "}
                <span>
                  <FaArrowUp className="rotate-45" />
                </span>
              </Button>

              <ul className="flex items-center gap-4">
                {[
                  { icon: FaInstagram, path: "#" },
                  { icon: FaTwitter, path: "#" },
                  { icon: FaDiscord, path: "#" },
                ].map((social, i) => (
                  // SOCIAL ICON
                  <li key={i}>
                    <Link
                      href={social.path}
                      className="text-white hover:text-secondary transition-all duration-500"
                    >
                      <social.icon className="text-2xl sm:text-[30px]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="xl:w-1/2 h-full hidden xl:block">
            <Image
              src="/assets/images/hero-img.png"
              alt="Hero Image"
              width={500}
              height={550}
              className="h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
