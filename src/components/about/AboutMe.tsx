import React from "react";
import Header from "./Header";
import SocialButton from "./SocialButton";
import ResumeButton from "./ResumeButton";

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const socialButtons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee8d219281f2824e5b20e50d933d1beb17bd8e434b764c78bf91d018dbce37a8?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      link: "https://linkedin.com/in/raghavsharmaweb3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aff8b3f682775e59f19cc01cef56b6dd0e083e237d94b14792b689ea45d1fccc?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      link: "https://github.com/some1uknow",
    },
  ];

  return (
    <main className="flex flex-col max-w-full">
      <Header />
      <section className="flex gap-4 self-start px-5 mt-12 max-md:mt-10">
        <ResumeButton />
        {socialButtons.map((button, index) => (
          <SocialButton key={index} src={button.src} link={button.link} />
        ))}
      </section>
    </main>
  );
};

export default MyComponent;
