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
  );
}

export default Navbar;
