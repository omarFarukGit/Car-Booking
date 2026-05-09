import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets.js";
import { useAppContext } from "../AppContext/AppContext.jsx";
import toast from "react-hot-toast";
function Navbar() {
  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } =
    useAppContext();

  const location = useLocation();
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role");
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.success(error.message);
    }
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);
  return (
    <div
      className={`sticky  top-0 shadow-sm backdrop-blur-lg bg-white/10 border border-white/20  flex items-center justify-between px-6 md:px-16 xl:px-32 py-4 text-black relative transition-all ${location.pathname === "/" && "bg-blue-500"}`}
    >
      <Link className=" text-2xl font-bold">
        {/* <img src={assets.logo} alt="logo" /> */}
        CarGo
      </Link>
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-amber-950 right-0 flex flex-col sm:flex-row  sm:items-center gap-4 sm:gap-8 max-sm:p-4  transition-all duration-300 z-50 ${location.pathname === "/home" ? "bg-black" : ""} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full "} `}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} onClick={() => setOpen(!open)}>
            {link.name}
          </Link>
        ))}

        <div className="hidden lg:flex items-center text-sm gap-2 px-3 rounded-full max-w-56 border-2 border-gray-700">
          <input
            type="text"
            className="py-1.5 w-full placeholder-gray-400  outline-none"
            placeholder="Serch prouducts"
          />
          <img src={assets.search_icon} alt="" />
        </div>
        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button
            onClick={() => (isOwner ? navigate("/owner") : changeRole())}
            className="cursor-pointer"
          >
            {isOwner ? "Dasboard" : "list cars"}
          </button>
          <button
            onClick={() => {
              user ? logout() : setShowLogin(true);
            }}
            className="cursor-pointer px-8 py-2 bg-red-300 hover:bg-primary-dull transition-all tesxt-white rounded-lg "
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={`${open ? assets.close_icon : assets.menu_icon}`} alt="" />
      </button>
    </div>
  );
}

export default Navbar;
