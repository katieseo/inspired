import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Nav />
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
