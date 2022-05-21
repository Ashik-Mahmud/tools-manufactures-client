import React from "react";
import { BsTools } from "react-icons/bs";
const Footer = () => {
  return (
    <footer class="bg-base-200 ">
      <footer class="footer p-10 bg-base-200 text-base-content container mx-auto">
        <div>
          <BsTools className="text-4xl" />
          <p>
            Tools house Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover" href="/">
            Branding
          </a>
          <a class="link link-hover" href="/">
            Design
          </a>
          <a class="link link-hover" href="/">
            Marketing
          </a>
          <a class="link link-hover" href="/">
            Advertisement
          </a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover" href="/">
            About us
          </a>
          <a class="link link-hover" href="/">
            Contact
          </a>
          <a class="link link-hover" href="/">
            Jobs
          </a>
          <a class="link link-hover" href="/">
            Press kit
          </a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover" href="/">
            Terms of use
          </a>
          <a class="link link-hover" href="/">
            Privacy policy
          </a>
          <a class="link link-hover" href="/">
            Cookie policy
          </a>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
