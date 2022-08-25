import React from "react";
import { ButtonGroup, Button, AppBar } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PageviewIcon from "@mui/icons-material/Pageview";
import SearchIcon from "@mui/icons-material/Search";
import ShortTextIcon from "@mui/icons-material/ShortText";
import "../App.css";

const TopBar = () => {
  return (
    <AppBar
      color="inherit"
      sx={{
        position: "sticky",
        p: 2,
        boxShadow: "none",
        borderBottom: "1px solid lightGray",
        width: "100%",
      }}
    >
      <div
        id="top-layer-1"
        style={{
          // display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <img src="/fLogo.png" alt="Airbnb-logo" className="flogo"></img>
        <ButtonGroup className="buttonGroup">
          <Button>Anywhere</Button>
          <Button>Any week</Button>
          <Button>
            Add guests
            <PageviewIcon fontSize="large" sx={{ color: "#FF385C" }} />
          </Button>
        </ButtonGroup>
        <div>
          <Button
            className="button"
            style={{ color: "black", textTransform: "none" }}
          >
            Become a host
          </Button>
          <Button style={{ borderRadius: "75%" }}>
            <LanguageIcon style={{ color: "black" }} />
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "16px", borderColor: "lightGray" }}
          >
            <MenuSharpIcon
              className="button"
              style={{ color: "black", margin: "2px" }}
            />
            <AccountCircleIcon style={{ color: "grey", fontSize: "30px" }} />
          </Button>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <Button
        variant="outlined"
        id="top-layer-2"
        sx={{
          p: 2,
        }}
        style={{
          width: "95%",
          margin: "auto",
          borderColor: "lightgray",
          borderRadius: "16px",
          textTransform: "none",
          color: "black",
          fontWeight: "600",
          justifyContent: "space-betweens",
          boxShadow: "1px 1px 4px 1px lightGray",
        }}
      >
        <div style={{ width: "80%", display: "flex", alignItems: "center" }}>
          <div>
            <SearchIcon />
          </div>
          <div style={{ padding: "0px 14px", textAlign: "left" }}>
            Where To?
            <br />
            <span style={{ color: "gray", fontWeight: "100" }}>
              Anywhere•Any week•Add Guests
            </span>
          </div>
        </div>
        <div
          style={{
            width: "20%",
          }}
        >
          <Button
            variant="outlined"
            style={{
              height: "52px",
              borderRadius: "50%",
              borderColor: "lightgray",
              color: "black",
              padding: "13px",
              marginRight: "0",
              marginLeft: "auto",
              display: "block",
            }}
          >
            <ShortTextIcon />
          </Button>
        </div>
      </Button>
    </AppBar>
  );
};

export default TopBar;
