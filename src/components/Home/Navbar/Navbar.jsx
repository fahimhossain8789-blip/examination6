import React, { useState } from "react";

const NavButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`btn ${active ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none' : 'btn-ghost'}`}
  >
    {label}
  </button>
);

const  Navbar = ({ cartData }) => {
  const [active, setActive] = useState("");
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-7">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <h1 className="hidden md:block text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>

          {/* Mobile Dropdown */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={() => setActive("features")}>Features</a></li>
              <li><a onClick={() => setActive("pricing")}>Pricing</a></li>
              <li><a onClick={() => setActive("testimonials")}>Testimonials</a></li>
              <li><a onClick={() => setActive("FAQ")}>FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          {["features", "pricing", "testimonials", "FAQ"].map((item) => (
            <NavButton
              key={item}
              label={item.charAt(0).toUpperCase() + item.slice(1)}
              active={active === item}
              onClick={() => setActive(item)}
            />
          ))}
        </nav>

        {/* Cart & Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartData.length > 0 && (
                  <span className="badge badge-xs indicator-item bg-red-500 w-3 text-white">{cartData.length}</span>
                )}
              </div>
            </label>
            <div tabIndex={0} className="card card-compact dropdown-content mt-3 w-52 shadow bg-base-100">
              <div className="card-body">
                <span className="text-lg font-bold">{cartData.length} Items</span>
                <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Login & Get Started */}
          <div className="flex items-center gap-2">
            <p className="font-bold cursor-pointer">Login</p>
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;