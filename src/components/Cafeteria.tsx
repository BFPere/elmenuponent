import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Slickpere.css"
import Slider from "react-slick";
import background from "../assets/portada.jpg";
import pcafe from "../assets/pissarracafe.jpg";
import cafe from "../assets/cafe.jpg";
import cafeambllet from "../assets/cafeambllet.jpg";
import cafessol from "../assets/cafessol.jpg";

function Cafeteria() {
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
          <h1>Gaudeix del servei de cafeteria. Tasta el nostre cafè...</h1>
          <h2>Ideal per gaudir d'una pausa.</h2>
        </div>
      <Slider {...settings}>

        <div>
          <img className="img-pissarra"
            src={pcafe}
            alt="pissarra cafe"
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
            src={cafeambllet}
            alt="cafeambllet"
          />
        </div>
        <div>
          <img className="img-general"
            src={cafessol}
            alt="cafessol"
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
export default Cafeteria;