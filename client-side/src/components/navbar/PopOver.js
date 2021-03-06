import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import "./Navbar.css";
import "./PopOver.css";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState("Sign In");

  const username = useSelector((store) => store.user.first_name);
  // console.log("username", username)
  // setUser(username)
  React.useEffect(() => {
    if (username) {
      setUser(username);
      console.log("username", username);
    }
  }, [user, username]);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "none",
          color: "rgb(65, 62, 62)",
          fontSize: "16px",
          borderRadius: "0",
          boxShadow: "0",
          margin: "2px 0px 0px 0px",
          textTransform: "capitalize",
          ":hover": { background: "white", boxShadow: "0" },
        }}
      >
        <div id="signInPopup">
          <a
            style={{
              color: "black",
              textDecoration: "none",
            }}
            href=""
          >
            {user}
          </a>
        </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="signInOptionsCont">
          <div>
            <div className="signInOptionsBox">
              <Link to="/login">
                <div className="signInBtn">Sign In | Create Account</div>
              </Link>
              <div className="optDum">Purchases</div>
              <div className="optDum">Wishlist</div>
              <div className="optDum">Shipping address</div>
              <div className="optDum">Payment methods</div>
              <div className="optDum">Looks</div>
              <div className="optDum">Password & Personal Info</div>
              <div className="optDum">Email & Mail preferences</div>
              <div className="optDum">Stores & Events</div>
              <div className="optDum">Contact Us</div>
              <div className="optDum">Skirts</div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
