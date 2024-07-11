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
    <section className="flex flex-col pb-6 w-2/3">
      <header className="flex flex-col px-5 w-full max-md:max-w-full">
        <h1 className="w-full text-8xl text-white leading-[91px] max-md:max-w-full max-md:text-4xl max-md:leading-10 font-Bebas">
          HI, I AM <br /> {name.toUpperCase()}.
        </h1>
        <p className="mt-2 w-full text-lg leading-7 text-stone-300 max-md:max-w-full font-Manrope">
          {description}
        </p>
      </header>
      <div className="flex gap-4 self-start px-5 mt-10">
        <ContactButton text="Contact Me" />
        {socialLinks.map((link, index) => (
          <SocialButton key={index} icon={link.icon} url={link.url} />
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
