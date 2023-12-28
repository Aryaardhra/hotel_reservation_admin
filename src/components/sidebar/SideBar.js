import "../sidebar/sidebar.scss";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";


const SideBar = () => {
  
  const { dispatch }= useContext(DarkModeContext, AuthContext);
  const handleLogout = () => {
    
    dispatch({type: "LOGOUT"});
    localStorage.removeItem("user");
  }
  return (
    <>
    <div className="sidebar">
        <div className="top">
            <Link to="/" style = {{ textDecoration : "none"}}>
            <span className="adminlogo">Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <Link to="/" style = {{ textDecoration : "none"}}>
                <li><DashboardCustomizeRoundedIcon  className="icon"/><span>Dashboard</span></li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style = {{ textDecoration : "none"}}>
                <li><PeopleOutlineRoundedIcon className="icon"/><span>User</span></li>
                </Link>
                <Link to="/hotels" style = {{ textDecoration : "none"}}>
                <li><ProductionQuantityLimitsIcon className="icon"/><span>Hotels</span></li>
                </Link>
                <Link to="/rooms" style = {{ textDecoration : "none"}}>
                <li><DeliveryDiningIcon className="icon"/><span>Rooms</span></li>
                </Link>
                <p className="title">USEFUL</p>
                <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsActiveIcon  className="icon"/><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
                <li><DashboardCustomizeRoundedIcon  className="icon"/><span>logs</span></li>
                <li><SettingsApplicationsIcon className="icon"/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                <NavLink onClick={handleLogout} to="/login" style = {{ textDecoration : "none"}}>
                <li><LogoutIcon className="icon"/><span>logout</span></li>
                </NavLink>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=> dispatch({type: "WHITE"})}></div>
          <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
        </div>
    </div>
    </>
  )
}

export default SideBar