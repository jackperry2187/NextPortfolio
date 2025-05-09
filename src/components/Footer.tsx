'use client'

import Link from "next/link";
import { GitHub, LinkedIn, Curseforge, Modrinth } from "./icons";

const Footer = () => {
    return (
        <nav className="flex justify-center bg-slate-800 border-t-2 border-slate-700 text-slate-400">
            <div className="">
                <ul className="flex gap-10 p-5 items-center">
                    <li className="hover:text-slate-200">
                        <Link href="https://github.com/jackperry2187" target="_blank">
                            <GitHub />
                        </Link>
                    </li>
                    <li className="hover:text-slate-200">
                        <Link href="https://www.linkedin.com/in/jackperry2187/" target="_blank">
                            <LinkedIn />
                        </Link>
                    </li>
                    <li className="hover:text-slate-200">
                        <Link href="https://www.curseforge.com/members/jackperry2187/projects" target="_blank">
                            <Curseforge />
                        </Link>
                    </li>
                    <li className="hover:text-slate-200">
                        <Link href="https://modrinth.com/user/jackperry2187" target="_blank">
                            <Modrinth />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Footer;
