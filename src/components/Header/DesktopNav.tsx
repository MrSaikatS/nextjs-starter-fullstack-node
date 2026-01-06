import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="flex gap-4">
      <Link href={"/"}>Home</Link>
    </nav>
  );
};

export default DesktopNav;
