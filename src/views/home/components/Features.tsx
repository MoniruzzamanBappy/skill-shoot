import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="sm:py-[100px] py-[50px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[50px] lg:gap-0">
          <div className="lg:w-[70%] flex flex-col items-center justify-center text-center md:text-left md:justify-start md:items-start">
            <h2 className="title">
              Why do we <span>exist?</span>
            </h2>
            <p className="description">
              Because we know that many people or companies have the same
              problem when it comes to how difficult it is to improve their
              skills
            </p>

            <div className="flex text-left items-center gap-3 mt-[30px]">
              <Image
                src="/assets/images/user.png"
                alt="User"
                width={70}
                height={70}
              />
              <div>
                <p className="text-lg font-semibold tex-[#2C2C2C] leading-[35px]">
                  Jerony Pulquosta
                </p>
                <p className="text-xs leading-[18px] text-gray">
                  CEO Skill Shoot
                </p>
              </div>
            </div>

            <hr className="w-full border-[#2C2C2C33] my-[30px]" />

            <div className="flex gap-16">
              <div>
                <h2 className="font-bold text-4xl leading-[54px] text-[#2C2C2C]">
                  100+
                </h2>
                <p className="text-xs leading-[30px] text-gray">
                  Updated Material
                </p>
              </div>
              <div>
                <h2 className="font-bold text-4xl leading-[54px] text-[#2C2C2C]">
                  15K
                </h2>
                <p className="text-xs leading-[30px] text-gray">Member Join</p>
              </div>
            </div>
          </div>

          <div>
            <ul className="grid md:grid-cols-2 md:gap-14 gap-[30px]">
              {featureData?.map((feature, i) => (
                // FEATURE ITEM
                <li
                  key={i}
                  className="flex flex-col items-center justify-center text-center md:text-left md:justify-start md:items-start"
                >
                  <Image
                    src={`/assets/images/${feature.icon}.svg`}
                    alt="Feature Icon"
                    width={50}
                    height={50}
                  />
                  <h5 className="text-2xl font-semibold leading-[36px] text-[#245D51] mt-[30px] mb-2.5 line-clamp-1">
                    {feature.title}
                  </h5>
                  <p className="description">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

const featureData = [
  {
    icon: "feature-icon-one",
    title: "Material Limitations",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "feature-icon-two",
    title: "Unprofessional Mentor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "feature-icon-three",
    title: "Video Quality",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "feature-icon-four",
    title: "High Price",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
