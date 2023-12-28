import "../adminnavbar/navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {

    const { dispatch }= useContext(DarkModeContext);
  return (
    <>
    <div className="admin_navbar">
        <div className="nav_wrapper">
            <div className="nav_search">
                <input  type="text" placeholder="search.."/>
                <SearchOutlinedIcon />
            </div>
            <div className="nav_items">
                <div className="nav_item">
                    <LanguageOutlinedIcon className="icon" />
                    English
                </div>
                <div className="nav_item">
                    <DarkModeOutlinedIcon  className="icon" onClick = {() => dispatch({type: "TOGGLE" })}/> 
                </div>
                <div className="nav_item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="nav_counter">1</div>
                </div>
                <div className="nav_item">
                    <ChatBubbleOutlineOutlinedIcon className="icon"/>
                    <div className="nav_counter">2</div>
                </div>
                <div className="nav_item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="nav_item">
                <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar