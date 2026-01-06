import Link from "next/link";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ResponsiveToggleNav from "./ResponsiveToggleNav";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            NSF App
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <ResponsiveToggleNav>
            <MobileNav />

            <DesktopNav />
          </ResponsiveToggleNav>

          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
