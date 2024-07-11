import Link from "next/link";
import React from "react";

interface NavItemProps {
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return <Link href={`/${text.toLowerCase()}`}>{text}</Link>;
};

export default NavItem;
