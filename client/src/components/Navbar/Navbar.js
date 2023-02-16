import { FaFacebookF, FaSnapchatSquare, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
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
