import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../css/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <FaInstagram className="icon" />
        <a
          href="https://www.instagram.com/elmenuponent12"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram.com/elmenuponent12
        </a>
      </div>

      <div className="footer-item">
        <MdEmail className="icon" />
        <a href="mailto:elmenuponent12@gmail.com">
          elmenuponent12@gmail.com
        </a>
      </div>

      <div className="footer-item">
        <FaWhatsapp className="icon" />
        <a href="https://wa.me/34623013133" target="_blank" rel="noopener noreferrer">
          +34 623 01 31 33
        </a>
      </div>

      <div className="footer-item">
        <FaMapMarkerAlt className="icon" />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Bar+Cafeteria+El+Menu+Carrer+Ponent+12+08401+Granollers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carrer Ponent 12, 08401 Granollers
        </a>
      </div>
    </footer>
  );
};

export default Footer;



