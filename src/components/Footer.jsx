import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import footBean from "../assets/fotter_image.png";

import logo from "../assets/BeanScene.png";

const Footer = () => {
  return (
    <div
      className="relative bg-yellow-950 bg-cover bg-center overflow-x-clip  text-white sm:h-[500px]"
      style={{ backgroundImage: `url(${footBean})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Decorative Beans */}

      {/* Main Footer Content */}
      <div className=" relative z-10 sm:max-w-7xl pt-30 sm:pt-40 mx-20 sm:px-8 sm:py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Description */}
        <div className="flex-1">
          <img src={logo} alt="Bean Scene" className="w-40" />
          <p className="mt-6 text-gray-200 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-800 hover:bg-yellow-700 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h1 className="font-semibold text-lg mb-3">About</h1>
            <ul className="space-y-2 text-gray-300">
              <li>Menu</li>
              <li>Features</li>
              <li>News & Blogs</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-3">Company</h1>
            <ul className="space-y-2 text-gray-300">
              <li>How we work</li>
              <li>Terms of Service</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-3">Contact Us</h1>
            <ul className="space-y-2 text-gray-300">
              <li>
                Akshya Nagar 1st Block, 1st Cross,
                <br />
                Rammurthy Nagar, Bangalore-560016
              </li>
              <li>+1 202-918-2132</li>
              <li>beanscene@mail.com</li>
              <li>www.beanscene.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t relative z-10 border-yellow-800 mt-10 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Bean Scene. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
