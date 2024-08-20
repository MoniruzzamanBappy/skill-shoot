import Image from "next/image";

const Clients = () => {
  return (
    <section id="clients" className="sm:pt-[100px] sm:pb-[200px] py-[50px]">
      <div className="container">
        <div className="text-center sm:mb-[50px] mb-[25px] max-w-2xl mx-auto">
          <h2 className="title sm:mb-2.5 mb-5">
            Trusted more than <span>100+</span> in the world
          </h2>
          <p className="description sm:px-16">
            they have asked us more than 3 times to teach their employees about
            various things. to improve their skills
          </p>
        </div>

        <div>
          <ul className="flex justify-center items-center flex-wrap sm:gap-[90px] gap-6">
            {clientsData?.map((client, i) => (
              <li key={i}>
                <Image
                  src={`/assets/images/${client.name}.png`}
                  alt="Brand Image"
                  width={client.width}
                  height={50}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;

const clientsData = [
  {
    name: "brand-one",
    width: 100,
  },
  {
    name: "brand-two",
    width: 130,
  },
  {
    name: "brand-three",
    width: 150,
  },
  {
    name: "brand-four",
    width: 150,
  },
  {
    name: "brand-five",
    width: 150,
  },
];
