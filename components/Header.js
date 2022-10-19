import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  const [navOpened, setNavOpened] = useState(false);
  console.log(navOpened);
  return (
    <header>
      <Nav navOpened={navOpened} setNavOpened={setNavOpened} />
      <Link href="/">
        <span className="logo rainbow" onClick={() => setNavOpened(false)}>
          inspired<span className="logo-sub">Web Creativity</span>
        </span>
      </Link>
      <div></div>
    </header>
  );
};

export default Header;
