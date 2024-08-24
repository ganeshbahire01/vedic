import { Clock, Mail, Phone, Pin } from "lucide-react";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="container py-12 lg:py-16">
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
        Contact Us
      </h1>
      <div className="lg:flex justify-between items-center pt-4 lg:pt-10">
        <div>
          <div className="flex gap-4 pt-4">
            <Pin className="w-6 h-6 text-olive-dark text-green-900" />
            <div className="lg:max-w-xl">
              <b className="text-green-700">
                Shri Vishwastha Ayurvedic chikitsalay and Panchkrma centre
              </b>{" "}
              Seven Hills Flyover Rd, Raghuveer Nagar, Vidya Nagar, Nyay Nagar,
              Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431003
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Phone className="w-6 h-6 text-olive-dark text-green-900" />
            <div>+91 9016531111</div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Mail className="w-6 h-6 text-olive-dark text-green-900" />
            <div>
              <a
                className="cursor-pointer"
                href={`mailto:${"companyEmail@example.com"}}`}
              >
                companyEmail@example.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Clock className="w-6 h-6 text-olive-dark text-green-900" />
            <div>Mon - Fri: 9:00 AM - 5:00 PM</div>
          </div>
        </div>
        <div className="hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.195259272437!2d75.34947244838746!3d19.876010630683837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba327f339847f%3A0xf606f0cb0bc09227!2sRejoice%20Hair%20%26%20Skin%20LLP%20-%20Dr.%20Pallavi%20Narkhede!5e1!3m2!1sen!2sin!4v1724542188082!5m2!1sen!2sin"
            width="600"
            height="320"
            className="rounded-3xl"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
        <div className="lg:hidden pt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.195259272437!2d75.34947244838746!3d19.876010630683837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba327f339847f%3A0xf606f0cb0bc09227!2sRejoice%20Hair%20%26%20Skin%20LLP%20-%20Dr.%20Pallavi%20Narkhede!5e1!3m2!1sen!2sin!4v1724542188082!5m2!1sen!2sin"
            width="270"
            height="200"
            className="rounded-3xl"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
