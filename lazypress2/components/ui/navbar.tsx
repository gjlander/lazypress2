import Link from "next/link";
import { Button } from "./button";
const Navbar = () => {
  return (
    <header className="z-1000 flex min-h-16 items-center justify-between rounded-2xl bg-white/30 px-16 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      <nav>
        <Link href="/">LazyPress</Link>
      </nav>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/login">
              <Button size="pill" variant="jelly">
                Sign In
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <Button size="pill" variant="jelly">
                Sign In
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
