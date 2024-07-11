'use client'
import NavItem from "./NavItem";
import { useRouter } from "next/navigation";

interface NavbarProps {
  name: string;
  navItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ name, navItems }) => {
  const router = useRouter();
  return (
    <header className="flex gap-5 justify-between px-16 py-6 leading-[150%] text-stone-300 max-md:flex-wrap max-md:px-5">
      <h1
        className="text-3xl font-Bebas tracking-tight cursor-pointer"
        onClick={() => router.push("/")}
      >
        {name.toUpperCase()}
      </h1>
      <nav className="flex flex-col justify-center my-auto text-base font-medium tracking-tight whitespace-nowrap">
        <ul className="flex gap-5 justify-between">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;