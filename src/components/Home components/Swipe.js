import { Grid } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../assets/images/swiper_1.jpg";
import img2 from "../../assets/images/swiper_2.jpg";
import img3 from "../../assets/images/swiper_3.jpg";
import img4 from "../../assets/images/swiper_4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/css/swiper.css";

function Swipe() {
  return (
    <Grid
      className="HeroPage"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e1f7f7",
        width: "auto",
        height: "auto",
        minHeight: { xl: "90vh", lg: "100vh", md: "100vh" },
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img1} />
        </SwiperSlide> */}
      </Swiper>
    </Grid>
  );
}

/* <img src={img1} style={{ height: "100px", width: "100px" }} /> */

export default Swipe;
