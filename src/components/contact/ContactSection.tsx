import React from "react";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="px-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-between self-stretch px-5 max-md:mt-5 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-7xl font-Bebas mt-5 text-white leading-tight max-md:text-4xl">
                  LET'S CONNECT
                </h2>
                <div className="flex flex-col mt-2 max-w-full text-base leading-4  w-full max-md:w-auto">
                  <div className="flex gap-1 font-Manrope font-semibold text-xl">
                    <span className="text-stone-300">Say hello at</span>
                    <a
                      href="mailto:robertgarcia@gmail.com"
                      className="text-white whitespace-nowrap"
                    >
                      raghu250407@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
