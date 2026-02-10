import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css"
import Slider from "react-slick";
import background from "../assets/portada.jpg";
import pmenu from "../assets/pissarramenu.jpg";
import lentejas from "../assets/lentejas.jpg";
import patates from "../assets/patates.jpg";
import brocoli from "../assets/brocoli.jpg";
import carrot from "../assets/Carrot.jpg";
import fideua from "../assets/fideua.jpg";
import Vitrina from "../assets/Vitrina.jpg";
import Codillo from "../assets/Codillo.jpg";
import Arrozleche from "../assets/Arrozleche.jpg";
import Lasaña from "../assets/Lasaña.jpg";
import Cremaverd from "../assets/Cremaverd.jpg";

/* Tipus del lightbox */
type LightboxData = {
  img: string;
  text: string;
};

function Menudiari() {
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
            <h1>El plat fort... el nostre menú diari!</h1>
            <h2>Elaborat diàriament amb productes de proximitat... les patates fregides naturals i totes les postres casolanes.</h2>
          </div>

          {/* SLIDER */}
          <Slider {...settings}>
            <div>
              <img
                className="img-pissarra"
                src={pmenu}
                alt="Pissarra menu"
                onClick={() =>
                  setLightboxData({
                    img: pmenu,
                    text: "No trobaràs un menú d'aquesta qualitat a aquest preu..."
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={lentejas}
                alt="lentejas"
                onClick={() =>
                  setLightboxData({
                    img: lentejas,
                    text: "Les llenties, per sucar-hi pà"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={patates}
                alt="Patates fregides"
                onClick={() =>
                  setLightboxData({
                    img: patates,
                    text: "Les patates fregides naturals i fetes al moment"
                  })
                }
              />
            </div>
            <div>
              <img
                className="img-general"
                src={brocoli}
                alt="brocoli"
                onClick={() =>
                  setLightboxData({
                    img: brocoli,
                    text: "Cada dia, hi ha una verdura en el menú"
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={carrot}
                alt="Carrot Cake"
                onClick={() =>
                  setLightboxData({
                    img: carrot,
                    text: "Totes les postres són casolanes. El carrot cake és un dels que més agrada"
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={fideua}
                alt="fideua"
                onClick={() =>
                  setLightboxData({
                    img: fideua,
                    text: "Els fogons en marxa, preparant la fideuà del menú"
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={Vitrina}
                alt="Vitrina postres"
                onClick={() =>
                  setLightboxData({
                    img: Vitrina,
                    text: "La varietat de postres casolanes crida l'atenció"
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
                    text: "Els plats cuinats: galta, garró, ... "
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={Arrozleche}
                alt="Arroz con leche"
                onClick={() =>
                  setLightboxData({
                    img: Arrozleche,
                    text: "Els dies que hi ha arròs amb llet, al final del dia no en queda ni un"
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={Lasaña}
                alt="Lasaña"
                onClick={() =>
                  setLightboxData({
                    img: Lasaña,
                    text: "La lasanya i els canelons, una especialitat de la casa"
                  })
                }
              />
            </div>

            <div>
              <img
                className="img-general"
                src={Cremaverd}
                alt="Crema verdures"
                onClick={() =>
                  setLightboxData({
                    img: Cremaverd,
                    text: "Les cremes de verdures, fetes al dia"
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

export default Menudiari;