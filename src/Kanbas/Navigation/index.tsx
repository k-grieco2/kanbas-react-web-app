import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaNetworkWired, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: " ", icon: <img width={"100%"} src={require('../../images/northeasternbannerN.png')}/> },
    { label: "Account",   icon: <span className="ts-5" style={{color: "lightgrey"}}><FaRegUserCircle /></span> },
    { label: "Dashboard", icon: <span><FaTachometerAlt /></span>  },
    { label: "Courses",   icon: <span><FaBook /> </span>          },
    { label: "Calendar",  icon: <span><FaRegCalendarAlt /> </span> },
    { label: "Inbox", icon: <span><FaInbox/></span> },
    { label: "History", icon: <span><FaClock/></span> },
    { label: "Studio", icon: <span><FaNetworkWired/></span> },
    { label: "Commons", icon: <span><FaSignOutAlt/></span> },
    { label: "Help", icon: <span><FaQuestionCircle/></span> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;