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
        <div className="hidden md:block pt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8063078560785!2d75.3500519!3d19.876063499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba30052d89871%3A0x3af9535ab732397c!2sShri%20Vishwastha%20Ayurvedic%20chikitsalay%20and%20Panchkrma%20centre!5e1!3m2!1sen!2sin!4v1724572376571!5m2!1sen!2sin"
            width="600"
            height="320"
            className="rounded-3xl"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:hidden pt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8063078560785!2d75.3500519!3d19.876063499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba30052d89871%3A0x3af9535ab732397c!2sShri%20Vishwastha%20Ayurvedic%20chikitsalay%20and%20Panchkrma%20centre!5e1!3m2!1sen!2sin!4v1724572376571!5m2!1sen!2sin"
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
