import React from "react";
import "./Navbar.css";
import { TextField, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CartIcon from "../../assets/navbarImages/cartIcon.png";
import SignInPopOver from "./PopOver";

export const MidHead = () => {
  return (
    <>
      <div className="midHead">
        <img
          className="midLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/Nordstrom_Logo_2019.png"
        />
        <div className="rightBox">
          <div>
            <TextField
              fullWidth
              id="standard-basic"
              variant="standard"
              size="small"
              placeholder="Search"
              sx={{ width: "200px", fontSize: "8px" }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlinedIcon />
                  </IconButton>
                ),
              }}
            />
          </div>

          <SignInPopOver />

          <div className="cartIconBox">
            <p id="cartIndicator">0</p>
            <a className="cartIcon" href="#">
              <img
                style={{
                  width: "31px",
                  height: "26px",
                }}
                src={CartIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
