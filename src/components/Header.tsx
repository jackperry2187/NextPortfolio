'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname(); 

    return (
        <nav className="flex justify-center bg-slate-800 border-b-2 border-slate-700 text-slate-400">
                <div className="w-full">
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-3xl p-5 text-center">
                        <li className="hover:text-slate-100">
                            <Link className={(pathname === '/' ? ' text-slate-100' : '')} href="/">Portfolio</Link>
                        </li>
                        <li className="hover:text-slate-100">
                            <Link className={(pathname === '/experience' ? ' text-slate-100' : '')} href="/experience">Experience</Link>
                        </li>
                        <li className="hover:text-slate-100">
                            <Link className={(pathname === '/projects' ? ' text-slate-100' : '')} href="/projects">Projects</Link>
                        </li>
                        <li className="hover:text-slate-100">
                            <Link className={(pathname === '/classes' ? ' text-slate-100' : '')} href="/classes">Classes</Link>
                        </li>
                        <li className="hover:text-slate-100">
                            <Link className={(pathname === '/resume' ? ' text-slate-100' : '')} href="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}
export default Header;
