import React from "react";
import SocialButton from "./SocialButton";
import ContactButton from "./ContactButton";

interface ProfileSectionProps {
  name: string;
  description: string;
  socialLinks: Array<{ icon: string; url: string }>;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  description,
  socialLinks,
}) => {
  return (
    <section className="flex flex-col items-center md:items-start pb-6 w-full md:w-2/3 px-4 md:px-0">
      <h1 className="text-6xl md:text-8xl text-white leading-tight md:leading-[91px] text-center md:text-left font-Bebas max-md:text-4xl max-md:leading-10">
        HI, I AM <br /> {name.toUpperCase()}.
      </h1>
      <p className="mt-4 text-lg leading-7 text-stone-300 text-center md:text-left font-Manrope">
        {description}
      </p>

      <div className="flex flex-row  gap-4 mt-4 md:mt-4 items-center md:items-center">
        <ContactButton text="Contact Me" />
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <SocialButton key={index} icon={link.icon} url={link.url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
