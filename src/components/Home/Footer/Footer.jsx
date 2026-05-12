import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () =>  {
  return  (
    <div>
      <footer className="bg-neutral  p-10 ">
        <div className="flex flex-col md:flex-row justify-between container lg:max-w-7xl mx-auto text-neutral-content footer sm:footer-horizontal">
          <nav className="max-w-[300px]">
            <h6 className="footer-title">DigitTools</h6>
            <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </nav>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex gap-2">
            <a href=""><AiFillInstagram  className="text-3xl p-1 bg-white rounded-full text-black transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white" /></a>
            <a href="https://www.facebook.com/profile.php?id=61583826647447">         <FaFacebookSquare className="text-3xl p-1 bg-white rounded-full text-black transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white" />
            </a>
            <a href="https://x.com/amirislambd313">
            <BsTwitterX className="text-3xl p-1 bg-white rounded-full text-black transition-all duration-500 ease-in-out hover:scale-125 hover:shadow-2xl hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white" />
            </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
