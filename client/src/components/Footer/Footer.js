import "./Footer.css";
import logo from "../../assets/logo.png";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import maroofStamp from "../../assets/maroofStamp.png";
import VAT from "../../assets/VAT.png";

import { FaFacebookF, FaSnapchatSquare, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="gradient__bg footer">
      <div className="footer__links">
        <div className="footer__links-col1">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <p>تقديم خدمات الطباعه في المملكة العربية السعوديه</p>
          <div className="store">
            <img src={appstore} alt="Logo" />
            <img src={googleplay} alt="Logo" />
          </div>
          <div className="brand">
            <div className="maroof">
              <span>معروف</span>
              <img src={maroofStamp} alt="Logo" />
            </div>
            <img src={VAT} alt="Logo" />
          </div>
        </div>

        <div className="footer__links-col2">
          <p>روابط مهمه</p>
          <ul>
            <li>مكتبة اطبع</li>
            <li>من نحن</li>
            <li>الاسئلة المتكررة</li>
            <li>نقطة الاستلام</li>
            <li>تسجيل مقدم الخدمة</li>
            <li>سياسة الخصوصية</li>
            <li>الشروط والاحكام</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        <div className="footer__links-col3">
          <p>منصة اطبع الالكترونية</p>
          <p>
            المكتب الإداري لشركة اطبع التجارية، مركز السدحان، شارع موسى بن نصير،
            حي السليمانية، الرياض
          </p>
          <p>
            للدعم الفني او الشكاوي تواصل معنا عبر support@print.sa أو الواتساب
            12345678908+
          </p>
          <div className="social">
            <div>
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com">
                <AiOutlineInstagram />
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com">
                <AiOutlineTwitter />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com">
                <AiFillYoutube />
              </a>
            </div>
            <div>
              <a href="https://www.snapchat.com">
                <FaSnapchatSquare />
              </a>
            </div>
            <div>
              <a href="https://www.whatsapp.com">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>&copy; جميع الحقوق محفوظة لصالح منصة اطبع 2023</footer>
    </div>
  );
}

export default Footer;
