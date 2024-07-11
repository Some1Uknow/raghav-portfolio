import React from 'react';
import ProfileSection from './ProfileSection';

const MyComponent: React.FC = () => {
  const profileData = {
    name: "robert garcia",
    description: "A Sydney based front-end developer passionate about building accessible and user friendly websites.",
    socialLinks: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdc3cca3f13344c0084609479fd1dac8493966d5d2967ac4ca88989e8e41e09b?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&", url: "#" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1922b629b35b7f9ae1d64f223f0e1a8567520503057f51f80822982fc55067b?apiKey=3cb8a6431f784264bdcac4b2a26e43d8&", url: "#" }
    ]
  };

  return <ProfileSection {...profileData} />;
};

export default MyComponent;