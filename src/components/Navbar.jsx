import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";
import Login from "./Login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user,logOut } = useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname||"/"


    const handleLogout=()=>{
        logOut().then(()=>{
            alert("Sign-out successful!! ");
            navigate(from,{replace:true})


        }).catch((error)=>{

        });

        
    }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-text" /> Book Shelf
          </Link>
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="hidden space-x-12 lg:flex items-center ">
            {!user?.emailVerified ? (
              <Link
                to = {"http://localhost:5173/login"}
                className="py-2 px-5 border rounded hover:bg-blue-500 hover:text-white"
              >
                Log in
              </Link>
            ) : (
              <div className="flex">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src={user?.photoURL}
                  alt={user.name}
                />
                <Link
                  onClick={() => handleLogout()}
                  className="py-2 px-5 border rounded hover:bg-blue-500 hover:text-white"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <div className="md:hidden">
          <div className="mr-3 flex items-center ">
            {!user?.emailVerified ? (
              <Link
                to = {"http://localhost:5173/login"}
                className="py-2 px-5 border rounded hover:bg-blue-500 hover:text-white"
              >
                Log in
              </Link>
            ) : (
              <div className="flex">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  onClick={toggleMenu}
                  src={user?.photoURL}
                  alt={user.name}
                />
                <Link
                  onClick={() => handleLogout()}
                  className="py-2 px-5 border rounded hover:bg-blue-500 hover:text-white"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          </div>
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
