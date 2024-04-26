import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import LoginForm from "./LoginForm";

export default function NavBar() {
  return (
    <nav className="flex item-center justify-between">
      <div className="group">
        <Link href="/" className="text-2xl font-bold">
          RaineBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-zinc-500"></div>
      </div>
      <LoginForm/>
    </nav>
  );
}
