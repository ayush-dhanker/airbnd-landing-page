import React from "react";
import Carousel from "better-react-carousel";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
import { CardData } from "./CardData";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Data } from "./Data";
import "../App.css";

const CarouselItem = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "91%",
          margin: "auto",
          padding: "20px",
          alignItems: "center",
          backgroundColor: "white",
          position: "fixed",
          zIndex: "12",
        }}
      >
        <Carousel
          cols={10}
          rows={1}
          gap={1}
          loop
          style={{ fontColor: "lightgray" }}
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 6,
              rows: 1,
              gap: 0.5,
              loop: false,
              autoplay: false,
            },
            {
              breakpoint: 800,
              cols: 5,
              rows: 1,
              gap: 0.01,
              loop: false,
              autoplay: false,
            },
            {
              breakpoint: 550,
              cols: 3,
              rows: 1,
              gap: 0.01,
              loop: false,
              autoplay: false,
            },
          ]}
          mobileBreakpoint={[300]}
        >
          {Data.map((ele) => {
            return (
              <Carousel.Item>
                <img
                  width="20%"
                  src={ele.icon}
                  alt={`${ele.name} icon`}
                  className="carouselItem"
                />
                <p>{ele.name}</p>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Button
          variant="outlined"
          id="myFilter"
          style={{
            border: "1px solid lightgray",
            height: "45px",
            padding: "0px 29px",
            borderRadius: "16px",
            textTransform: "none",
            color: "black",
          }}
        >
          <TocIcon />
          <span>Filter</span>
        </Button>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      <div
        id="showingCard"
        style={{
          display: "Grid",
          padding: "10px",
          margin: "0 5% 0 5%",
          marginTop: "6em",

          // gridTemplateColumns: "1fr 1fr ",
        }}
      >
        {CardData?.map((item) => {
          return (
            <>
              <Card
                style={{
                  margin: "10px 10px",
                  position: "relative",
                  borderRadius: "15px",
                }}
              >
                <CardMedia
                  image={item.img}
                  component="img"
                  style={{
                    width: "100%",
                    height: "262px",
                    borderRadius: "15px",
                  }}
                />
                <CardContent style={{ marginBottom: "-10px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ fontWeight: "bold" }}>{item.location}</p>
                    <p>★ {item.rating}</p>
                  </div>
                  <div style={{ textAlign: "left" }}>{item.km} kilometers</div>
                  <div style={{ textAlign: "left" }}>{item.availability}</div>
                  <div style={{ textAlign: "left", fontWeight: "bold" }}>
                    ₹{item.price} night
                  </div>
                </CardContent>
                <i
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    color: "black",
                    opacity: "0.45",
                  }}
                >
                  <FavoriteIcon />
                </i>
              </Card>
            </>
          );
        })}
      </div>
      {/*/////////////////////////////////////////////////////////////////////////////////////*/}
      <Button
        variant="outlined"
        style={{
          backgroundColor: "#222222",
          color: "white",
          borderRadius: "24px",
          position: "fixed",
          bottom: "20px",
          left: "45%",
          textTransform: "none",
          margin: "0 5% 5% 0",
        }}
        id="show-Map-btn"
      >
        Show Map <MapIcon />
      </Button>
    </>
  );
};

export default CarouselItem;
