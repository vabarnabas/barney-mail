import Link from "next/link";
import Logo from "../logo/logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 h-14 border-b bg-background">
      <div className="flex items-center justify-between h-full w-full px-4">
        <Link
          href="/"
          className="flex items-center gap-x-1 text-xl font-semibold"
        >
          <Logo />
        </Link>
      </div>
    </nav>
  );
}
