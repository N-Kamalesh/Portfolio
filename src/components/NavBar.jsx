import { BsMoonStarsFill } from "react-icons/bs";

function NavBar() {
  return (
    <header className="mb-12 py-8">
      <nav className="flex items-center justify-between">
        <h2 className="text-xl">Kamalesh</h2>
        <ul className="flex items-center">
          <li>
            <BsMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          <li>
            <a
              className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white"
              href="https://drive.google.com/file/d/1jUPyudARyPAeBBUrBWk-zSmzI08h47AN/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
