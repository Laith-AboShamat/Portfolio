import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return(
    <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Laith<span className="text-accent-DEFALUT">.</span>
            </h1>
        </Link>

        <div className="hidden xl:flex">
            <Nav/>
            <Link href="/contact">
                Hire me 
            </Link>
        </div>

        <div className="xl:hidden">
            Mobile nav
        </div>
    </div>
  </header>
  ) 
}

export default Header