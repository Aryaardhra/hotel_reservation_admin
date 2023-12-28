import "../featured/featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
   <>
   <div className="admin_featured">
    <div className="f_top">
      <h1 className="title">Total Revenue</h1>
       <MoreVertIcon fontSize="small" />
    </div>
    <div className="f_bottom">
      <div className="featured_chart">
        <CircularProgressbar value = {70} text = {"70%"}  strokeWidth = {1} />
      </div>
      <p className="title">Total sales made today</p>
      <p className="amount">$420</p>
      <p className="desc">Previous transactions processing. Last payments may not be included.</p>
      <div className="f_summary">
        <div className="item">
          <div className="item_title">Target</div>
          <div className="item_result negative">
            <KeyboardArrowDown fontSize="small" />
            <div className="result_amount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="item_title">Last week</div>
          <div className="item_result positive">
            <KeyboardArrowUpIcon fontSize="small" />
            <div className="result_amount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="item_title">Last Month</div>
          <div className="item_result positive">
            <KeyboardArrowUpIcon fontSize="small" />
            <div className="result_amount">$12.4k</div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Featured