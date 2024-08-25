// components/Footer.js
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">USEFUL LINKS</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                PRIVACY POLICY
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                BOOK APPOINTMENT
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                OUR SPECIALITIES
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                GALLERY
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                ¥MORE
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">NAVIGATION</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                HOME
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                TREATMENTS
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                ABOUT US
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                TESTIMONIALS
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">CONTACT</h3>
          <p className="mb-2">
            Palm Court Bldg M, 501/B, 5th Floor,
            <br />
            New Link Road, Beside Goregaon
            <br />
            Sports Complex, Malad West, Mumbai,
            <br />
            400064, Maharashtra
          </p>
          <p className="mb-2">
            <a href="tel:+918888888888" className="hover:underline">
              +91-8888888888
            </a>
          </p>
          <p>
            <a
              href="mailto:websupport@justdial.com"
              className="hover:underline"
            >
              websupport@justdial.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">CONNECT</h3>
          <div className="flex gap-2">
            <Linkedin />
            <Instagram />
            <Youtube />
            <Facebook />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2021 - 2022 Harmony Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
