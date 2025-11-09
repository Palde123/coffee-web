import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/BeanScene.png";
import coffeeTag from "../assets/Coffee.png";
import CoffeeBackground from "../assets/cofee-Backround.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${CoffeeBackground})` }}>
      {/* 🖤 Overlay only on background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌟 Content above overlay */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex flex-row justify-around items-center p-5 text-white">
          {/* Logo */}
          <div>
            <img src={logo} alt="Bean Scene" className="w-40" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row gap-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="font-serif hover:text-amber-300 cursor-pointer transition"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="font-serif hover:text-amber-300">Sign In</button>
            <button className="bg-amber-300 font-serif w-28 font-bold p-3 rounded-3xl text-black hover:bg-amber-400 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black/80 text-white flex flex-col items-center gap-6 py-8 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-lg font-serif hover:text-amber-300 transition"
              >
                {item.label}
              </a>
            ))}
            <button className="font-serif hover:text-amber-300">Sign In</button>
            <button className="bg-amber-300 text-black font-serif px-6 py-2 rounded-3xl font-bold hover:bg-amber-400 transition">
              Sign Up
            </button>
          </div>
        )}

        {/* Hero Section */}
        <div className="p-10 md:p-20 mt-10 md:mt-20 text-center md:text-left">
          <h1 className="text-white font-serif text-2xl">
            We’ve got your morning covered with
          </h1>
          <img src={coffeeTag} alt="Coffee" className="mt-8 mx-auto md:mx-0 w-80" />
          <p className="text-white mt-10 font-serif text-xl md:text-2xl leading-relaxed">
            It is best to start your day with a cup of coffee. Discover the
            <br /> best flavours coffee you will ever have. We provide the best
            <br /> for our customers.
          </p>
          <button className="text-black font-serif bg-amber-300 px-6 py-3 font-bold rounded-3xl mt-8 hover:bg-amber-400 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
