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

function Esmorzars() {
const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    
    <div className="slider-container">        
      <div>
          <h1>Esmorzars a Granollers al millor preu.</h1>
          <h2>Ofertes per tothom, combinació de cafès o begudes amb entrepans, brioxeria,... I amb qualitat!</h2>
        </div>
      <Slider {...settings}>

        <div>
          <img className="img-pissarra"
            src={pesmorzar}
            alt="pissarra cafe"
          />
        </div>
        <div>
          <img className="img-general"
            src={Vitrinaesmorzar}
            alt="Vitrina esmorzars"
          />
        </div>
        <div>
          <img className="img-general"
            src={Minicafe}
            alt="Oferta entrepa mini"
          />
        </div>
        <div>
          <img className="img-general"
            src={truita}
            alt="truita"
          />
        </div>
        <div>
          <img className="img-general"
            src={fruitsecs}
            alt="fruitsecs"
          />
        </div>
        <div>
          <img className="img-general"
            src={Croissantcafe}
            alt="Croissant"
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
  );

}
export default Esmorzars;