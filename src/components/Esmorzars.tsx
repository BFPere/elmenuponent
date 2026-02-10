import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css"
import Slider from "react-slick";
import background from "../assets/portada.jpg";
import pesmorzar from "../assets/pissarraesmorzar.jpg";
import Vitrinaesmorzar from "../assets/Vitrinaesmorzar.jpg";
import Minicafe from "../assets/Minicafe.jpg";
import truita from "../assets/truita.jpg";
import fruitsecs from "../assets/fruitsecs.jpg";
import Croissantcafe from "../assets/Croissantcafe.jpg";

/* Tipus del lightbox */
type LightboxData = {
  img: string;
  text: string;
};

function Esmorzars() {
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
            <h1>Esmorzars a Granollers al millor preu.</h1>
            <h2>Ofertes per tothom, combinació de cafès o begudes amb entrepans, brioxeria,... I amb qualitat!</h2>
          </div>

          {/* SLIDER */}
          <Slider {...settings}>
            <div>
              <img
                className="img-pissarra"
                src={pesmorzar}
                alt="Pissarra Esmorzar"
                onClick={() =>
                  setLightboxData({
                    img: pesmorzar,
                    text: "Per esmorzar de gust, entrepants de tot tipus, brioxeria, pastissos casolans..."
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={Vitrinaesmorzar}
                alt="Vitrina d'esmorzars"
                onClick={() =>
                  setLightboxData({
                    img: Vitrinaesmorzar,
                    text: "La nostra vitrina amb els esmorzars preparats... "
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
                    text: "La combinació més demanada.. un entrepà petit acabat de fer i un cafè amb llet"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={truita}
                alt="Truita de patates"
                onClick={() =>
                  setLightboxData({
                    img: truita,
                    text: "La truita és... l'has de tastar!"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={fruitsecs}
                alt="Pastís de fruits secs"
                onClick={() =>
                  setLightboxData({
                    img: fruitsecs,
                    text: "Els pastissos fets artesanalment... "
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={Croissantcafe}
                alt="Croissant cafè"
                onClick={() =>
                  setLightboxData({
                    img: Croissantcafe,
                    text: "Un croissant i un cafè amb llet... sempre ve de gust!"
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

export default Esmorzars;