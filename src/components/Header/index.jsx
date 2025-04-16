import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RotatingGearIcon from "../../assets/svgJSX/RotatingGearIcon.jsx";

const HeaderComponent = ({ data }) => {
  const { companyName, headerOptions } = data;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const [showAuthMobile, setShowAuthMobile] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-gradient-to-b from-green-950/90 via-emerald-950 to-black backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-8 drop-shadow-md rounded-xl"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-md font-[Poppins]">
            {companyName}
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-[Poppins] md:text-lg  text-white relative">
          {headerOptions.sectionHeaders.map((option) =>
            option.path.startsWith("#") ? (
              <a
                key={option.key}
                href={option.path}
                className="px-3 py-1 hover:text-emerald-400 transition"
              >
                {option.key}
              </a>
            ) : (
              <Link
                key={option.key}
                to={option.path}
                className="px-3 py-1 hover:text-emerald-400 transition"
              >
                {option.key}
              </Link>
            )
          )}

          <div className="relative">
            <button
              className="h-8 w-8"
              onClick={() => setShowAuthMenu((prev) => !prev)}
            >
              <RotatingGearIcon color="#ffffff" />
            </button>
            {showAuthMenu && (
              <div className="absolute right-0 top-10 bg-emerald-100 text-gray-900 shadow-lg rounded-md py-2 w-32 z-50">
                {headerOptions.authHeaders.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-emerald-100"
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 text-gray-900 shadow-lg rounded-b-xl">
          <div className="px-6 py-4 space-y-3 font-medium text-lg">
            {headerOptions.sectionHeaders.map((option) =>
              option.path.startsWith("#") ? (
                <a
                  key={option.key}
                  href={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg  hover:bg-emerald-100 text-emerald-800"
                >
                  {option.key}
                </a>
              ) : (
                <Link
                  key={option.key}
                  to={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg  hover:bg-emerald-100 text-emerald-800"
                >
                  {option.key}
                </Link>
              )
            )}

            <div
              onClick={() => setShowAuthMobile(!showAuthMobile)}
              className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg hover:bg-emerald-100 text-emerald-800 font-semibold"
            >
              <span>Account Options</span>
              <span className="h-6 w-6">
                <RotatingGearIcon color="#000000" />
              </span>
            </div>

            {showAuthMobile && (
              <div className="pl-4 space-y-2 transition-all duration-300">
                {headerOptions.authHeaders.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowAuthMobile(false);
                    }}
                    className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-emerald-100"
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;

{
  /* {showAuthMobile ? (
                "Hide"
              ) : (
                <>
                  <button
                    className="h-8 w-8"
                    onClick={() => setShowAuthMenu((prev) => !prev)}
                  >
                    <RotatingGearIcon />
                  </button>
                </>
              )} */
}
