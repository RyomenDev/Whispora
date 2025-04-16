import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RotatingGearIcon from "../../assets/svgJSX/RotatingGearIcon.jsx";
// import Lottie from "lottie-react";
// <div className="w-24 h-24">
//         <Lottie animationData={RotatingGearIcon} loop={true} />
//       </div>

const HeaderComponent = ({ data }) => {
  const { companyName, headerOptions } = data;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/"); // This navigates to the home page
  };
  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-emerald-950/90 backdrop-blur-md shadow-md">
      {" "}
      {/*  bg-[#296949]/80   bg-[#051912]/90 */}
      <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        <div onClick={handleLogoClick}>
          <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md font-[Poppins] ">
            {companyName}
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 font-[Poppins] md:text-2xl text-white ">
          {headerOptions.map((option) =>
            option.path.startsWith("#") ? (
              <a
                key={option.key}
                href={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
              >
                {option.key}
              </a>
            ) : (
              <Link
                key={option.key}
                to={option.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
              >
                {option.key}
              </Link>
            )
          )}
          <div className="h-8 w-8 py-2">
            <RotatingGearIcon />
          </div>
        </nav>

        <div className="md:hidden font-[Poppins]">
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
            {headerOptions.map((option) =>
              option.path.startsWith("#") ? (
                <a
                  key={option.key}
                  href={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
                >
                  {option.key}
                </a>
              ) : (
                <Link
                  key={option.key}
                  to={option.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-200"
                >
                  {option.key}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
