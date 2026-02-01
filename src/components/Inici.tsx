import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css"
import Slider from "react-slick";
import background from "../assets/portada.jpg";
import exterior from "../assets/exterior.jpg";
import Nata from "../assets/Nata.jpg";
import cafe from "../assets/cafe.jpg";
import interior2 from "../assets/interior2b.jpg";

function Inici() {
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
          <h1>Prova el millor menú diari, casolà i al centre de Granollers</h1>
          <h2>Al nostre local hi trobaràs el millor café...unes ofertes per esmorzar sense competència i el millor menú diari... Com a casa!</h2>
        </div>
      <Slider {...settings}>

        <div>
          <img className="img-pissarra"
            src={exterior}
            alt="exterior"
          />
        </div>
        <div>
          <img className="img-general"
            src={cafe}
            alt="cafe"
          />
        </div>
        <div>
          <img className="img-general"
            src={interior2}
            alt="interior2"
          />
        </div>
        <div>
          <img className="img-general"
            src={Nata}
            alt="Nata"
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
export default Inici;