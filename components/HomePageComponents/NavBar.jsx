const NavBar = () => {

  const name = "<Some1UKnow/>"

  return (
    <div className="navbar box-border border-white shadow-white">
      <div className="flex-1">
        <a className="text-4xl p-4 font-semibold">{name}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl font-extralight">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Tech Stack</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;