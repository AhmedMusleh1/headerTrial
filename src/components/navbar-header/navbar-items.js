import Link from "next/link";

const NavbarItem = ({ href, text, active }) => {
  return (
    <Link href={href} className={`nav__link ${active ? "active" : ""} `}>
      {text}
    </Link>
  );
};

export default NavbarItem;
