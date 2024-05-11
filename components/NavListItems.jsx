import Link from "next/link"

const NavListItems = () => {
  return (
    <> <li>
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
  </li></>
  )
}

export default NavListItems