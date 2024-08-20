"use client";

import Button from "@/components/Button";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`w-full absolute lg:top-6 top-0 z-50 h-fit`}>
      <div className="container">
        <div className="flex items-center justify-between gap-12 w-full py-5 lg:py-0">
          <Link href="#home">
            <Image src="/assets/logo.svg" alt="Logo" width={128} height={36} />
          </Link>

          <button
            className="block lg:hidden text-4xl text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <MdOutlineClose /> : <BsGridFill />}
          </button>

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <div className="lg:flex items-center gap-3 hidden">
            <Link href="#" className="px-2 py-3 text-lg text-white">
              Login
            </Link>
            <Button
              variant="secondary"
              path="#"
              className="!font-normal !px-11 text-lg rounded-lg"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
