import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaNetworkWired, FaSignOutAlt, FaQuestionCircle, FaBars, FaGlasses, FaChevronDown } from "react-icons/fa";
import { courses } from "../Database";

function KanbasNavigation() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
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
  ].filter(link => link.label !== "Labs");
  const { pathname } = useLocation();
  return (
    <>
    <div className="d-block d-md-none" style={{color: "white", backgroundColor: "black", verticalAlign: "top", position: "fixed", top: 0, left: 0, width: "100%", padding: 0}}>
      <h5>
      <table width="100%">
        <tr>
          <td width={"10%"}><FaBars/></td>
          <td width={"80%"} className="float-left" style={{textAlign: "center"}}>{lastSegment}</td>
          <td width={"10%"} style={{color: "white"}}>
            <FaGlasses/> &nbsp;
            <FaChevronDown/>
          </td>
        </tr>
      </table>
      </h5>
    </div>
    <div className="d-none d-md-block" style={{backgroundColor: "black", verticalAlign: "top"}}>
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>

    </>
  );
}
export default KanbasNavigation;