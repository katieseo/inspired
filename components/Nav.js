import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ navOpened, setNavOpened }) => {
  const router = useRouter();
  const galleries = [
    { title: "3D Web Experience", url: "/gallery/multidimensional" },
    { title: "Parallax Background", url: "/gallery/parallax-bg" },
    { title: "Masonry Style Layout", url: "/gallery/masonry" },
    { title: "Text Background Animation", url: "/gallery/text-bg-animation" },
    // { title: "Background Dot Animation", url: "/gallery/bg-dot-animation" },
    // {
    //   title: "Parallax Scrolling Effect",
    //   url: "/gallery/parallax-scrolling-effect",
    // },
    // { title: "CSS Animations", url: "/gallery/text-bg-animation" },
    // { title: "Tailing Cursor", url: "/gallery/tailing-cursor" },
  ];

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
        {galleries.map((g) => (
          <li
            key={g.title}
            className={router.pathname == g.url ? "rainbow active" : "rainbow"}
          >
            <Link href={g.url}>{g.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
