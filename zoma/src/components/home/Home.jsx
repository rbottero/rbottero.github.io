import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { homeSlide } from "../../Data";
import parse from "html-react-parser";
import ScrollLink from "../link/ScrollLink";
import {
  FaCircleArrowRight,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <Swiper
        speed={500}
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop="true"
        autoplay={{
          delay: 5000, // cambia cada 5 segundos
          disableOnInteraction: true,
        }}
      >
        {homeSlide.map(({ img, title, description }, index) => {
          return (
            <SwiperSlide
              className="home-slide section relative"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
              }}
              key={index}
            >
              <div className="slide-overlay"></div>
              <div className="home-data container">
                <h3 className="home-subtitle">
                  Bienvenidos a <span className="slider-logo"> Zoma</span>
                </h3>
                <h1 className="home-title">{parse(title)}</h1>
                <p className="home-description">{description}</p>

                <div className="home-buttons">
                  <ScrollLink
                    to="about"
                    name="Más"
                    className="button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />

                  <ScrollLink
                    to="gallery"
                    name="Mirá nuestros últimos drops"
                    className="button home-button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <button className="swiper-btn next-btn">
          <FaArrowRightLong />
        </button>
        <button className="swiper-btn prev-btn">
          <FaArrowLeftLong />
        </button>
      </Swiper>
    </section>
  );
};

export default Home;
