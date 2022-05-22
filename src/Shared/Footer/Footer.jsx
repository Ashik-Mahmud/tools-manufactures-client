import React from "react";
import { BsTools } from "react-icons/bs";
const Footer = () => {
  return (
    <footer
      className="bg-base-200"
      style={{ clipPath: `ellipse(130% 100% at 51.45% 100%)` }}
    >
      <div className="footer justify-center items-center pt-36 pb-20 bg-base-200 text-base-content container mx-auto">
        <div>
          <BsTools className="text-4xl" />
          <p>
            Tools house Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="/">
            Branding
          </a>
          <a className="link link-hover" href="/">
            Design
          </a>
          <a className="link link-hover" href="/">
            Marketing
          </a>
          <a className="link link-hover" href="/">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover" href="/">
            About us
          </a>
          <a className="link link-hover" href="/">
            Contact
          </a>
          <a className="link link-hover" href="/">
            Jobs
          </a>
          <a className="link link-hover" href="/">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href="/">
            Terms of use
          </a>
          <a className="link link-hover" href="/">
            Privacy policy
          </a>
          <a className="link link-hover" href="/">
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title">Supported Payment</span>
          <img
            className="max-w-xs rounded cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9oOWByubBUUaxf_gfkmPKlW3vFEQR3X6KmpA16YpoA_0PlJtS_LUQxCkW3h1khxVWPY&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
