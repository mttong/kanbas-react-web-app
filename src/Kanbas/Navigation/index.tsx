import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaVoicemail,  FaRegClock, FaRegPlayCircle, FaArrowAltCircleRight, FaQuestion} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "_______", icon: <img src="/images/northeastern.jpg" alt="Northeastern" className="fs-2 northeastern-image" /> }, 
    { label: "Account",     icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard",   icon: <FaTachometerAlt className="fs-2 red-icon" /> },
    { label: "Courses",     icon: <FaBook className="fs-2 red-icon"/> },
    { label: "Calendar",    icon: <FaRegCalendarAlt className="fs-2 red-icon"/> },
    { label: "Inbox",       icon: <FaVoicemail className="fs-2 red-icon"/> },
    { label: "History",     icon: <FaRegClock className="fs-2 red-icon"/> },
    { label: "Studio",      icon: <FaRegPlayCircle className="fs-2 red-icon"/> },
    { label: "Commons",     icon: <FaArrowAltCircleRight className="fs-2 red-icon"/> },
    { label: "Help",        icon: <FaQuestion className="fs-2 red-icon"/> },
  
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
