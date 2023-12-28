import "../landingPage/landingPage.scss";
import SideBar from "../../components/sidebar/SideBar"
import Navbar from "../../components/adminnavbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/TableList";

const LandingPage = () => {
  return (
    <>
    <div className="landing_page">
    <SideBar />
     <div className="page_container">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title = "Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="l_list_container">
          <div className="l_list_title">Latest Transactions</div>
          <TableList />
        </div>
    </div>    
    </div>
    </>
  )
}

export default LandingPage