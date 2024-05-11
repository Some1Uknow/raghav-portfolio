import Link from "next/link";
import { FaGripLines } from "react-icons/fa";
import NavListItems from "./NavListItems";

const NavBar = () => {
  const name = "<Some1UKnow/>";

  return (
    <div className="navbar box-border bg-black text-white font-Poppins border-white shadow-white">
      <div className="drawer z-10 block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-2 ">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button text-2xl">
            <FaGripLines />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <NavListItems />
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <a className="text-4xl p-4 font-semibold max-sm:text-center">{name}</a>
      </div>
      <div className="flex-none max-sm:hidden">
        <ul className="menu menu-horizontal px-1 gap-2 text-xl font-extralight">
          <NavListItems />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
