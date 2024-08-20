import Button from "@/components/Button";
import Image from "next/image";

const JoinSection = () => {
  return (
    <section id="join">
      <div className="container">
        <div className="md:px-[67px] md:py-[71px] py-[45px] px-10 bg-[#F2E7DB] rounded-2xl relative">
          <Image
            src="/assets/images/banner-svg-four.svg"
            alt="Banner Shapes"
            className="absolute left-0 top-0"
            width={60}
            height={60}
          />
          <Image
            src="/assets/images/banner-svg-two.svg"
            alt="Banner Shapes"
            className="absolute md:left-[55%] md:-bottom-6 bottom-14 -right-5"
            width={52}
            height={45}
          />

          <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-10 text-center md:text-start">
            <div className="md:w-[60%]">
              <h2 className="title">
                <span>Improve</span> your skills, and reach your career as soon
                as possible
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <Button path="#" variant="secondary">
                Join Now
              </Button>
              <Button path="#">Subscribe Course</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
