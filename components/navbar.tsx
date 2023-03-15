import { useState } from "react";
import BulbIcon from "@/components/images/bulb";
import MenuIcon from "@/components/images/open";
import CloseIcon from "@/components/images/close";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "#" },
    { name: "Video", link: "#" },
    { name: "GitHub", link: "https://github.com/thabozee" },
    { name: "Contact-Me", link: "#" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full sticky">
      {/*shadow-md */}
      <div className="md:flex items-center justify-evenly bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2 items-center">
            <BulbIcon height={24} width={24} />
          </span>
          Manolo
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <CloseIcon height={24} width={24} />
          ) : (
            <MenuIcon height={24} width={24} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
