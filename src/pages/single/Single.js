
import Navbar from "../../components/adminnavbar/Navbar";
import Chart from "../../components/chart/Chart";
import SideBar from "../../components/sidebar/SideBar";
import TableList from "../../components/table/TableList";
import AdminList from "../list/AdminList";
import "../single/single.scss";

const Single = () => {
  return (
    <>
    <div className="single">
        <SideBar />
        <div className="single_container">
            <Navbar />
            <div className="s_top">
          <div className="s_left">
            <div className="edit_button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item_img"
              />
              <div className="details">
                <h1 className="item_title">Jane Doe</h1>
                <div className="detail_item">
                  <span className="item_key">Email:</span>
                  <span className="item_value">janedoe@gmail.com</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Phone:</span>
                  <span className="item_value">+1 2345 67 89</span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Address:</span>
                  <span className="item_value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detail_item">
                  <span className="item_key">Country:</span>
                  <span className="item_value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <TableList />
        </div>
        </div>
    </div>
    </>
  )
}

export default Single