"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Hero">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Hero
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Form">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Form
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav className="bg-cyan-800 fixed top-0 shadow-xl z-50 w-full">
      <div className="h-10vh flex justify-between z-50 text-white lg-py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">BestSpaces</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-lg">
              <Link spy={true} smooth={true} to="Hero">
                <li className="hover:text-orange-300 transition border-b-2 border-cyan-800 hover:border-orange-300 cursor-pointer">
                  Hero
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Form">
                <li className="hover:text-orange-300 transition border-b-2 border-cyan-800 hover:border-orange-300 cursor-pointer">
                  Form
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}
