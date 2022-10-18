import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
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
          <Link href="/parallaxbg">Parallax Background</Link>
        </li>
        <li className="rainbow">
          <Link href="/masonry">Masonry Style Layout</Link>
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
  );
};

export default Nav;
