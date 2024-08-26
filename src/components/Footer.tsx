// components/Footer.js
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">USEFUL LINKS</h3>
          <ul>
            <li className="mb-2">
              <Link href="/procedure" className="hover:underline">
                Procedure
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">NAVIGATION</h3>
          <ul>
            <li className="mb-2">
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/procedure" className="hover:underline">
                Treatments
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blogs/1" className="hover:underline">
                Water is Your Best Friend
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blogs/2" className="hover:underline">
                Understanding PCOD
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">CONTACT</h3>
          <p className="mb-2">
            Shri Vishwastha Ayurvedic chikitsalay and Panchkrma centre Seven
            Hills Flyover Rd, Raghuveer Nagar, Vidya Nagar, Nyay Nagar,
            Chhatrapati Sambhajinagar (Aurangabad)
            <br />
            Maharashtra 431003
          </p>
          <p className="mb-2">
            <Link href="tel:+919016531111" className="hover:underline">
              +91-9016531111
            </Link>
          </p>
          <p>
            <Link
              href="mailto:websupport@justdial.com"
              className="hover:underline"
            >
              websupport@justdial.com
            </Link>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">CONNECT</h3>
          <div className="flex gap-2">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919016531111&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
            </a>
            <a
              href="https://www.instagram.com/shri_vishwastha_chikitsalay/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/@drgopalgayakwad"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
            <a
              href="https://www.facebook.com/people/vishwastha_ayurvedalay/100088978789785/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>
          &copy; 2023 - 2024{" "}
          <b className="text-green-600">
            Shri Vishwastha Ayurvedic chikitsalay and Panchkrma centre.
          </b>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
