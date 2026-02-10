import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css"
import Slider from "react-slick";
import background from "../assets/portada.jpg";
import pcafe from "../assets/pissarracafe.jpg";
import cafe from "../assets/cafe.jpg";
import cafeambllet from "../assets/cafeambllet.jpg";
import cafessol from "../assets/cafessol.jpg";


/* Tipus del lightbox */
type LightboxData = {
  img: string;
  text: string;
};

function Cafeteria() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [zoom, setZoom] = useState<boolean>(false);

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  /* Funció per tancar el lightbox */
  const closeLightbox = () => {
    setLightboxData(null);
    setZoom(false);
  };

  /* ESC per tancar */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div>
        <div className="slider-container">
          <div className="slider-text">
            <h1>Gaudeix del servei de cafeteria. Tasta el nostre cafè...</h1>
            <h2>Ideal per gaudir d'una pausa.</h2>
          </div>

          {/* SLIDER */}
          <Slider {...settings}>
            <div>
              <img
                className="img-pissarra"
                src={pcafe}
                alt="Pissarra cafes"
                onClick={() =>
                  setLightboxData({
                    img: pcafe,
                    text: "Preus sense competència! I amb la millor qualitat"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={cafe}
                alt="Cafè"
                onClick={() =>
                  setLightboxData({
                    img: cafe,
                    text: "El millor cafè, acabat de moldre"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={cafeambllet}
                alt="Cafè amb llet"
                onClick={() =>
                  setLightboxData({
                    img: cafeambllet,
                    text: "Difícil resistir-se a aquest cafè amb llet"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={cafessol}
                alt="Cafè sol"
                onClick={() =>
                  setLightboxData({
                    img: cafessol,
                    text: "Cafè exprés ... tasta'l i gaudeix-lo!"
                  })
                }
              />
            </div>
            
          </Slider>
          <body style={{ 
            backgroundImage: `url(${background})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            backgroundColor: "transparent",
          }}>
      </body>   
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxData && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>

          <div className="lightbox-content">
            <img
              src={lightboxData.img}
              alt="Lightbox"
              className={zoom ? "zoomed" : ""}
              onClick={(e) => {
                e.stopPropagation();
                setZoom(!zoom);
              }}
            />
            <p className="lightbox-text">{lightboxData.text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cafeteria;