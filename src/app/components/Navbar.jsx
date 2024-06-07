import Link from "next/link";

const Navbar = () => (
    <nav className="p-4 border-b-2">
        <div className="container mx-auto">
            <Link href='/'>
                <strong><h1 className="text-2xl">Hello, World!</h1></strong>
            </Link>
        </div>
    </nav>
);

export default Navbar;
