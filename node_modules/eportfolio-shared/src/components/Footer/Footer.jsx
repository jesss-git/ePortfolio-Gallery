import "./Footer.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import personalLogo from "../../assets/personalLogo.png";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "UX/UI", path: "/ux-ui" },
  { name: "GRAPHICS", path: "/graphics" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CODE", path: "/code" },
  { name: "ABOUT", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Name */}
        <div className="footer-logo">
        <a href="/">
            <img
              src={personalLogo}
              alt="Portfolio Logo"
              className="footer-logo-img"
            />
          </a>
        </div>

        {/* Links */}
        <ul className="footer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.path} className="footer-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} portfolio — All Rights Reserved.
      </div>
    </footer>
  );
}
