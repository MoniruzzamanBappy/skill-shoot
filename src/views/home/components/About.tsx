import Image from "next/image";
import { FiPlayCircle, FiUser, FiUserCheck, FiVideo } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="">
      <div className="container sm:py-[100px] py-[50px]">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="hidden lg:block">
            <Image
              src="/assets/images/about-img.png"
              alt="About Image"
              width={450}
              height={570}
            />
          </div>

          <div>
            <h2 className="title sm:text-5xl sm:leading-[72px] font-bold sm:mb-9 mb-5">
              Let us{" "}
              <span className="!text-primary relative after:content-[' '] after:bg-[url('/assets/images/title-bottom-shape.svg')] after:bg-no-repeat after:w-full after:h-5 after:absolute after:-bottom-4 after:left-0">
                Skill Shoot
              </span>
            </h2>
            <p className="description">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
              <br /> <br />
              we have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>

            <ul className="grid grid-cols-2 md:gap-x-[100px] md:gap-y-[30px] gap-x-8 gap-y-5 mt-9">
              {aboutFeatures?.map((feature, i) => (
                // FEATURE ITEM
                <li key={i} className="flex items-center gap-4">
                  <span className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full bg-[#CB846130] grid place-items-center text-secondary text-[15px] sm:text-2xl">
                    <feature.icon />
                  </span>

                  <p className="font-semibold text-xs sm:text-base sm:leading-[35px] leading-[30px] text-[#2C2C2C]">
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const aboutFeatures = [
  {
    icon: FiUser,
    text: "15K People Join",
  },
  {
    icon: FiUserCheck,
    text: "Trusted Mentor",
  },
  {
    icon: FiVideo,
    text: "30+ Free Videos",
  },
  {
    icon: FiPlayCircle,
    text: "100+ Premium Videos",
  },
];
