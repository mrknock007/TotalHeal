import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="border-2 border-solid border-black h-12 flex flex-row items-center justify-evenly text-white text-xs bg-neutral-800">
      {isMobile && (
        <div className="grow w-1 ml-3 cursor-pointer">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>TotalHeal</MenuItem>
            <MenuItem onClick={handleClose}>Consult</MenuItem>
            <MenuItem onClick={handleClose}>Shop</MenuItem>
            <MenuItem onClick={handleClose}>Educate with us</MenuItem>
            <MenuItem onClick={handleClose}>Blogs and Reviews</MenuItem>
          </Menu>
        </div>
      )}

      {!isMobile && (
        <>
          <div className="grow w-5 ml-3 cursor-pointer">TotalHeal</div>
          <div className="grow cursor-pointer w-1">Consult</div>
          <div className="grow cursor-pointer w-1">Shop</div>
          <div className="grow cursor-pointer w-13">Educate with us</div>
          <div className="grow cursor-pointer w-13">Blogs and Reviews</div>
        </>
      )}

      <div className="grow cursor-pointer w-15">
        <InputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          className="bg-white"
        />
        <IconButton type="button" aria-label="search">
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div className="grow cursor-pointer w-10">Login/SignUp</div>
      <div className="grow cursor-pointer w-1">
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Navbar;