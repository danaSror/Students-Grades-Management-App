import React from 'react';
import { AiFillLinkedin } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-2 text-center">

      <div className="flex justify-center gap-8 ">
        <a
          href="https://www.linkedin.com/in/dana-sror/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <AiFillLinkedin className="text-sm" />
        </a>
        <a
          href="https://github.com/danaSror"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <AiFillGithub className="text-sm" />
        </a>
        <a
          href="mailto:dana.sror123@gmail.com"
          className="cursor-pointer"
        >
          <BiLogoGmail className="text-sm" />
        </a>
        <a
          href="https://wa.me/972522494184"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <BsWhatsapp className="text-sm" />
        </a>
          </div>
          <p className="text-xs mt-1">
        All rights preserved to Dana Sror &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
