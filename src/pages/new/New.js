import "../new/new.scss"
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/adminnavbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../config";

const New = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});

    const handleChange = (e) => {
     setInfo((prev) => ({ ...prev, [e.target.id] : e.target.value }));
    };

    const handleClick =  async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "aazzvjv0");
      try{
        const uploadRes = await axiosInstance.post("https://api.cloudinary.com/v1_1/dxi9kqaz4/image/upload", data);

        const { url } = uploadRes.data;

        const newUser = {
          ...info,
          img: url,
        };

        await axiosInstance.post("/auth/register", newUser)
      } catch (error) {
          console.log(error);
      }

    };
    
    //console.log(info);

  return (
    <>
    <div className="new">
        <SideBar />
        <div className="new_container">
            <Navbar />
            <div className="n_top">
          <h1>{title}</h1>
        </div>
        <div className="n_bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="form_input" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange = {handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
                </div>
              ))}
              <button onClick = {handleClick}>Send</button>
            </form>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default New