import * as React from "react";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";
import "../Navbar.css";

export const HomeNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ display: "flex" }}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "none",
          padding: "5px",
          color: "black",
          fontSize: "12px",
          borderRadius: "0",
          boxShadow: "0",
          margin: "0px 40px 0px 40px",
          ":hover": {
            borderBottom: "1px solid black",
            background: "white",
            boxShadow: "0",
          },
        }}
      >
        Home
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "centre",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popoverBox">
          <div>
            <div className="catHead">Clothing</div>
            <div className="catBox">
              <a href="#" className="categories">
                Activewear
              </a>
              <a href="#" className="categories">
                Blazers and sports coats
              </a>
              <a href="#" className="categories">
                Coats and Jackets
              </a>
              <a href="#" className="categories">
                Dress shirts
              </a>
              <a href="#" className="categories">
                Jeans
              </a>
              <a href="#" className="categories">
                Joggers and sweatpants
              </a>
              <a href="#" className="categories">
                Lounges, Pajamas and Robes
              </a>
              <a href="#" className="categories">
                Pants
              </a>
              <a href="#" className="categories">
                Polo Shirts
              </a>
              <a href="#" className="categories">
                Shirts
              </a>
              <a href="#" className="categories">
                Socks
              </a>
              <a href="#" className="categories">
                Suits & Separates
              </a>
              <a href="#" className="categories">
                Sweaters
              </a>
              <a href="#" className="categories">
                Sweatshirts & hoodies
              </a>
              <a href="#" className="categories">
                T-shirts
              </a>
              <a href="#" className="categories">
                Underwares & Boxers
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Shoes</div>
            <div className="catBox">
              <a href="#" className="categories">
                Boots
              </a>
              <a href="#" className="categories">
                Comfort
              </a>
              <a href="#" className="categories">
                Dress shoes
              </a>
              <a href="#" className="categories">
                Dress shirts
              </a>
              <a href="#" className="categories">
                Loafers and Slip-ons
              </a>
              <a href="#" className="categories">
                Oxford & Derbys
              </a>
              <a href="#" className="categories">
                Running Shoes
              </a>
              <a href="#" className="categories">
                Sandals and Flip-flops
              </a>
              <a href="#" className="categories">
                Shoes cares and Accessories
              </a>
              <a href="#" className="categories">
                Slippers
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Accessories</div>
            <div className="catBox">
              <a href="#" className="categories">
                Bags & Bagpacks
              </a>
              <a href="#" className="categories">
                Belts
              </a>
              <a href="#" className="categories">
                Face masks
              </a>
              <a href="#" className="categories">
                Gloves
              </a>
              <a href="#" className="categories">
                Hats
              </a>
              <a href="#" className="categories">
                Headphones
              </a>
              <a href="#" className="categories">
                Jewelry
              </a>
              <a href="#" className="categories">
                Phonecases
              </a>
              <a href="#" className="categories">
                Scarves
              </a>
              <a href="#" className="categories">
                Sunglasses & eyewears
              </a>
              <a href="#" className="categories">
                Ties & pocket Squares
              </a>
              <a href="#" className="categories">
                Wallets
              </a>
              <a href="#" className="categories">
                Watches
              </a>
            </div>
          </div>

          <div>
            <div className="catHead">Designers</div>
            <div className="catBox">
              <a href="#" className="categories">
                Designer Clothing
              </a>
              <a href="#" className="categories">
                Designer shoes
              </a>
              <a href="#" className="categories">
                Designer Accessories
              </a>
            </div>

            <div className="catHead">Big & Tall</div>
            <div className="catBox">
              <a href="#" className="categories">
                Clothing
              </a>
              <a href="#" className="categories">
                Jeans
              </a>
              <a href="#" className="categories">
                Pants
              </a>
              <a href="#" className="categories">
                Shirts
              </a>
            </div>

            <div className="catHead">Grooming & Cologne</div>
            <div className="catBox">
              <a href="#" className="categories">
                Body care & Deodrant
              </a>
              <a href="#" className="categories">
                Cologne
              </a>
              <a href="#" className="categories">
                Dopp Kits & Toiletry
              </a>
              <a href="#" className="categories">
                Gifts and Sets
              </a>
              <a href="#" className="categories">
                Hair Products
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1621561248609-dd398ae5c2ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              style={{ marginTop: "50px", height: "350px" }}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
};
