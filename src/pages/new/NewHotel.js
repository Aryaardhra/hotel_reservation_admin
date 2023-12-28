import "../new/newhotel.scss"
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/adminnavbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from "../../components/formdata";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { axiosInstance } from "../../config";

const NewHotel = () => {

    const [files, setFiles] = useState("");
    const [info, setInfo] = useState({});
    const [rooms, setRooms] = useState([]);

    const { data, loading, error } = useFetch("/rooms");

    const handleChange = (e) => {
     setInfo((prev) => ({ ...prev, [e.target.id] : e.target.value }));
    };

    const handleSelect = (e) => {
     const value = Array.from(e.target.selectedOptions, (option) => option.value)
     setRooms(value);
    };

    const handleClick = async (e) => {
      e.preventDefault();
      try{
        const list = await Promise.all(
          Object.values(files).map(async (file) => {
            const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "aazzvjv0");
      const uploadRes = await axiosInstance.post("https://api.cloudinary.com/v1_1/dxi9kqaz4/image/upload", data);

      const { url } = uploadRes.data;
      return url;
          })
        );

        const newHotel = {
          ...info,
          rooms,
          photos: list,
        };
        await axiosInstance.post("/hotels", newHotel)
      } catch (error) {

      }

     
    };
  return (
    <>
    <div className="new">
        <SideBar />
        <div className="new_container">
            <Navbar />
            <div className="n_top">
          <h1>Add New Product</h1>
        </div>
        <div className="n_bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form_input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="form_input" key={input.id}>
                  <label>{input.label}</label>
                  <input  id ={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
               <div className="form_input" >
                  <label>Featured</label>
                 <select id="featured" onChange={handleChange}>
                 <option value={false}>No</option>
                 <option value={true}>Yes</option>
                 </select>
                </div>
                <div className="selectRooms" >
                  <label>Rooms</label>
                 <select id="rooms"  multiple onChange={handleSelect}>
                  { loading ? "Loading" :( data && data.map((room) => (
                    <option  key={room._id}value={room._id}>{room.title}</option>
                  )
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

export default NewHotel;