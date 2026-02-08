import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css";

import background from "../assets/portada.jpg";
import exterior from "../assets/exterior.jpg";
import Nata from "../assets/Nata.jpg";
import cafe from "../assets/cafe.jpg";
import interior2 from "../assets/interior2b.jpg";
import Minicafe from "../assets/Minicafe.jpg";
import Codillo from "../assets/Codillo.jpg";

/* Tipus del lightbox */
type LightboxData = {
  img: string;
  text: string;
};

function Inici() {
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
      {/* BACKGROUND */}
      <div
        // className="hero-background"
        // style={{ backgroundImage: `url(${background})` }}
      >
        <div className="slider-container">
          <div className="slider-text">
            <h1>Prova el millor menú diari, casolà i al centre de Granollers</h1>
            <h2>
              Al nostre local hi trobaràs el millor cafè... unes ofertes per esmorzar
              sense competència i el millor menú diari... Com a casa!
            </h2>
          </div>

          {/* SLIDER */}
          <Slider {...settings}>
            <div>
              <img
                className="img-pissarra"
                src={exterior}
                alt="Exterior"
                onClick={() =>
                  setLightboxData({
                    img: exterior,
                    text: "La façana del nostre local al centre de Granollers"
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
                src={interior2}
                alt="Interior"
                onClick={() =>
                  setLightboxData({
                    img: interior2,
                    text: "Un espai acollidor perquè et sentis com a casa"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={Nata}
                alt="Nata"
                onClick={() =>
                  setLightboxData({
                    img: Nata,
                    text: "Postres casolanes fetes amb molt d’amor"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={Minicafe}
                alt="Mini cafè"
                onClick={() =>
                  setLightboxData({
                    img: Minicafe,
                    text: "Esmorzars ràpids però de qualitat"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={Codillo}
                alt="Codillo"
                onClick={() =>
                  setLightboxData({
                    img: Codillo,
                    text: "Aquest és un plat molt bo 😋"
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

export default Inici;
