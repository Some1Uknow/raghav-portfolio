import Link from "next/link";

const NavBar = () => {
  const name = "<Some1UKnow/>";

  return (
    <div className="navbar box-border bg-black text-white font-Poppins border-white shadow-white">
      <div className="flex-1">
        <a className="text-4xl p-4 font-semibold max-sm:text-center">{name}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 text-xl font-extralight max-sm:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/techstack">Tech Stack</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
