import "../new/newroom.scss"
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/adminnavbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../components/formdata";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { axiosInstance } from "../../config";

const NewRoom = () => {

  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
   setInfo((prev) => ({ ...prev, [e.target.id] : e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try{
     await axiosInstance.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <>
    <div className="new">
        <SideBar />
        <div className="new_container">
            <Navbar />
            <div className="n_top">
          <h1>Add New Room</h1>
        </div>
        <div className="n_bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="form_input" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  id={input.id} 
                  type={input.type} 
                  placeholder={input.placeholder}
                  onChange={handleChange}
                  />
                </div>
              ))}
               <div className="form_input">
                  <label>Rooms</label>
                  <textarea 
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers"/>
                </div>
                <div className="form_input">
                  <label>Choose a hotel</label>
                  <select id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                  >
                    {loading ? "loading" : data && data.map((hotel) => (
                      <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                    ))}
                  </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default NewRoom;