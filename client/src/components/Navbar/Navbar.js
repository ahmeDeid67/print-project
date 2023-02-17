import { FaFacebookF, FaSnapchatSquare, FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const menu = (
    <div className="menu-list">
      <div className="close">
        <GrFormClose />
      </div>
      <ul>
        <li>
          <a href="#a">
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a href="#b">مكتبة اطبع</a>
        </li>
        <li>
          <a href="#c">تسجيل الدخول</a>
        </li>
        <li>
          <a href="#d">انشاء حساب</a>
        </li>
        <li>
          <a href="#e">التغليف الفاخر</a>
        </li>
      </ul>
      <div className="social">
        <a href="https://www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.twitter.com">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://www.snapchat.com">
          <FaSnapchatSquare />
        </a>
        <a href="https://www.whatsapp.com">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
  return (
    <>
      <div className="navlinks">
        <div className="navlinks__social">
          <a href="https://www.facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.twitter.com">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.youtube.com">
            <AiFillYoutube />
          </a>
          <a href="https://www.snapchat.com">
            <FaSnapchatSquare />
          </a>
          <a href="https://www.whatsapp.com">
            <FaWhatsapp />
          </a>
        </div>

        <div className="navlinks__option">
          <a href="#print">مكتبة اطبع</a>
          <a href="#cover">التغليف الفاخر</a>
          <a href="#english">English</a>
        </div>
      </div>
      <div className="gradient__bg">
        <div className="navbar">
          <div className="navbar_logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="menu">
            <p>EN</p>
            <div onClick={openMenuHandler}>
              {openMenu ? menu : <RxHamburgerMenu />}
            </div>
          </div>

          <div className="navbar_btns">
            <p>
              <a href="#signin">تسجيل الدخول</a>
            </p>
            <p>
              <a href="#signup">انشاء حساب</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
