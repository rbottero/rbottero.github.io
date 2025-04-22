import aboutImg1 from "../../assets/about-1.jpg";
import aboutImg2 from "../../assets/about-2.jpg";
import dataImg1 from "../../assets/quality.svg";
import dataImg2 from "../../assets/delicious.svg";
import ScrollLink from "../link/ScrollLink";
import { FaCircleArrowRight } from "react-icons/fa6";
import SectionTitle from "../title/SectionTitle";

import "./about.css";

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <div className="about-shape grid">
          <img src={aboutImg1} alt="" className="about-img" />
          <div className="about-experience">
            <h3 className="about-no">Lorem</h3>
            <span className="about-details">ipsum dolor sit amet</span>
          </div>
          <img src={aboutImg2} alt="" className="about-img" />
        </div>
        <div className="about-content">
          <SectionTitle
            subtitle="Sobre nosotros"
            title={
              <>
                Estamos acá para <span>cambiar</span> la moda
              </>
            }
          />

          <p className="about-description">
            Sed tincidunt, lacus ac rutrum feugiat, dui magna fringilla felis, a
            blandit arcu enim eu urna. Vivamus efficitur massa a lacinia semper.
            Nulla pharetra ipsum lacus, vel egestas tellus molestie venenatis.
            Praesent eget augue libero. Morbi neque ante, pellentesque ut
            efficitur at, pharetra ut mi. Nam a ex ac lectus sodales accumsan in
            nec metus.
          </p>

          <div className="about-data grid">
            <div className="about-item">
              <div className="about-data-shape">
                <img src={dataImg1} alt="" className="about-data-img" />
              </div>
              <div>
                <h3 className="about-title">
                  Tenemos los productos de mejor calidad
                </h3>
                <p className="about-data-description">
                  Aenean et metus vel purus condimentum commodo. Maecenas
                  aliquet, lorem nec tincidunt ultrices, ipsum lacus vehicula
                  velit, et porttitor quam dui eu ante.
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-data-shape">
                <img src={dataImg2} alt="" className="about-data-img" />
              </div>
              <div>
                <h3 className="about-title">Y la página web más copada</h3>
                <p className="about-data-description">
                  Aenean et metus vel purus condimentum commodo. Maecenas
                  aliquet, lorem nec tincidunt ultrices, ipsum lacus vehicula
                  velit, et porttitor quam dui eu ante.
                </p>
              </div>
            </div>
          </div>

          <ScrollLink
            to="about"
            name="Más"
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
