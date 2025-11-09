import React from "react";
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-green-800 text-base-content rounded p-10 border-t text-white">
      <nav className="grid grid-flow-col gap-4 text-xl">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <FaInstagram className="w-10 h-10" />
          <FaFacebook className="w-10 h-10" />

          <FaPinterest className="w-10 h-10" />
        </div>
      </nav>
      <aside>
        <p className="font-semibold">
          “© 2025 GreenNest. All rights reserved.”
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
