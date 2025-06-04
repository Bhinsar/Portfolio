import { Briefcase, House, Layers, Mail, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

function Navbar() {
  const NavContainerRef = useRef(null);
  const [isNavVisible, setNavVisible] = useState(true);
  const [prevY, setPrevY] = useState(0);

  const { y: currentY } = useWindowScroll();

  useEffect(() => {
    if (currentY === 0) {
      setNavVisible(true);
    } else if (currentY > prevY) {
      setNavVisible(false);
    } else if (currentY < prevY) {
      setNavVisible(true);
    }
    setPrevY(currentY);
  }, [currentY, prevY]);

  const navItems = [
    { name: "Home", href: "#hero", icon: <House /> },
    { name: "About", href: "#about", icon: <User /> },
    { name: "Skills", href: "#skills", icon: <Briefcase /> },
    { name: "Projects", href: "#projects", icon: <Layers /> },
    { name: "Contact", href: "#contact", icon: <Mail /> },
  ];

  const handleResumeClick = () => {
    // Handle resume button click, e.g., open a modal or redirect to a resume link
    window.open("/Bhinsar Jagdish(React resume).pdf", "_blank");
  };

  return (
    <>
      <nav
        ref={NavContainerRef}
        className={`
        fixed z-50  bg-gray-800  w-full flex justify-center items-center transition-all duration-700
        ${
          isNavVisible
            ? "top-0 opacity-100 pointer-events-auto"
            : "-top-20 opacity-0 pointer-events-none"
        }
        
      `}
      >
        <div
          className={`p-4 flex md:justify-between gap-0 items-center shadow-lg ${
            currentY === 0 ? "w-full" : "w-4/5 m-3 rounded-md "
          }`}
        >
          <a
            href="#hero"
            className=" hover:text-gray-300 flex items-center"
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8 inline-block mr-2"
            />
            <span className="whitespace-nowrap">Bhinsar Jagdish</span>
          </a>
          <ul className="flex space-x-4 justify-center items-center gap-4">
            {/* desktop */}
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hidden md:flex  hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Icons */}
            <li className="md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="md:hidden fixed bottom-0 left-0 flex items-center  hover:text-gray-300"
                >
                  {item.icon}
                </a>
              ))}
            </li>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="hidden md:block bg-blue-500  px-4 py-2 rounded hover:bg-blue-600"
            >
              Resume
            </button>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <ul className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-around items-center py-2 md:hidden z-50">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="flex flex-col items-center  hover:text-blue-400"
            >
              {item.icon}
              <span className="text-xs">{item.name}</span>
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={handleResumeClick}
            className="flex flex-col items-center hover:text-blue-400 focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M9 9h6v6H9z" />
            </svg>
            <span className="text-xs">Resume</span>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
