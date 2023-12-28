import "../widget/widget.scss";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user" :
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineIcon
                    className="icon"
                    style={{
                        color: "#9a4051",
                        backgroundColor: "rgba(255,0,0,0.2)",
                    }}
                    />
                ),
            };
            break;
            case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartIcon
                    className="icon"
                    style={{
                        color: "cadetblue",
                        backgroundColor: "rgb(157 134 76 / 20%)"
                    }}
                    />
                ),
                };
                break;
                case "earning":
                    data = {
                        title: "EARNINGS",
                        isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <MonetizationOnOutlinedIcon
                        className="icon"
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0, 128,0,0.2)",
                        }}
                        />
                    ),
                    };
                    break;
                    case "balance":
                      data = {
                        title: "BALANCE",
                        isMoney: true,
                        link: "See details",
                        icon: (
                          <AccountBalanceWalletIcon
                            className="icon"
                            style={{
                              backgroundColor: "rgba(128, 0, 128, 0.2)",
                              color: "brown",
                            }}
                          />
                        ),
                      };
                      break;
                    default:
                      break;
    }

  return (
    <>
     <div className="widget">
        <div className="left_side">
            <span className="w_title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right_side">
          <div className="percentage positive">
            <ExpandLessIcon />
            {diff} %</div>
            { data.icon }
        </div>
     </div>
    </>
  )
}

export default Widget