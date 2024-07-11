"use client";

interface SocialIconProps {
  src: string;
  url: any;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, url }) => (
  <img
    loading="lazy"
    src={src}
    alt="social-icon"
    className="shrink-0 w-8 aspect-square"
    onClick={() => window.open(url)}
  />
);

const SocialIcons: React.FC = () => {
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e37778b2fead2e8fddedc5cd7f48892e65e96d00b6d27d991f9f6f9eea3d23?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      url: "https://www.linkedin.com/in/raghavsharmaweb3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a19386f3c0b92e541484ab2b1e3b2740f0aa9da64348e3f0460db7da565f964a?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      url: "https://github.com/some1uknow",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ce1df8deb33b93cb5ce854c20ae70bdf78121ebfd03d170ab178e220544bcbe?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      url: "https://instagram.com/snippet.master__",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1632d5cf69f08f9f6de23c7c72da4a875c2f079cc4f74dff49a073fa410849f?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&",
      url: "https://x.com/some1uknow25",
    },
  ];

  return (
    <div className="flex gap-5 justify-between self-start mt-10">
      {icons.map((icon, index) => (
        <SocialIcon key={index} src={icon.src} url={icon.url} />
      ))}
    </div>
  );
};

export default SocialIcons;
