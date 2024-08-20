import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "../header/navData";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="sm:py-[118px] pt-[104px] max-w-[700px] mx-auto w-full text-center grid place-items-center">
          <h2 className="title text-white font-normal">
            Subscribe to get notified about update
          </h2>
          <p className="description text-white text-opacity-60 mt-0.5">
            By subscribing with your mail, you will accept our privacy policy
          </p>

          <form className="flex flex-col sm:flex-row gap-4 sm:mt-[64px] mt-[50px] w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="placeholder:text-opacity-60 text-white leading-[50px] px-[30px] py-[5px] bg-white bg-opacity-[8%] sm:w-[380px] w-full block border border-transparent rounded-lg focus:outline-none focus:border-secondary"
            />
            <Button
              variant="secondary"
              className="leading-[50px] text-lg py-[5px] !font-medium rounded-lg w-fit mx-auto sm:mx-0"
            >
              Subscribe us
            </Button>
          </form>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12 w-full sm:py-10 py-[50px]">
          <Link href="#">
            <Image src="/assets/logo.svg" alt="Logo" width={128} height={36} />
          </Link>

          <ul className="flex flex-col lg:flex-row items-center justify-center gap-[30px] bg-primary lg:bg-transparent w-full lg:w-fit px-[20px] lg:px-0 lg:border-opacity-100">
            {navItems?.map((item, i) => (
              // NAV ITEM
              <li key={i} className="relative">
                <Link
                  href={`/${item.link}`}
                  className={`text-light-white text-lg leading-[35px] py-2 hover:text-white transition-all duration-500`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
