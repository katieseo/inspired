import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <header>
      <nav
        onClick={() => {
          setNavOpened(!navOpened);
        }}
      >
        <div className="nav-icon-wrap">
          <div className={navOpened ? "nav-icon opened" : "nav-icon"}></div>
        </div>
        <ul className={navOpened ? "" : "navClosed"}>
          <li className="rainbow">
            <Link href="/multidimensional">3D Web Experience</Link>
          </li>
          <li className="rainbow">
            <Link href="/parallaxbg">Parallax Fixed Background</Link>
          </li>
          {/* <li className="rainbow">
            <Link href="/">Parallax Scrolling Effect</Link>
          </li>
          <li className="rainbow">
            <Link href="/">CSS Animation</Link>
          </li>
          <li className="rainbow">
            <Link href="/">Mouse Handling</Link>
          </li> */}
        </ul>
      </nav>
      <Link href="/">
        <span className="logo rainbow">
          inspired<span className="logo-sub">Web Creativity</span>
        </span>
      </Link>
      <div></div>
    </header>
  );
};

export default Header;
