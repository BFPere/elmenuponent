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
import crestes from "../assets/crestes.jpg";
import salmo from "../assets/salmo.jpg";

function Menudiari() {
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
          <h1>El plat fort... el nostre menú diari!</h1>
          <h2>Elaborat diàriament amb productes de proximitat... les patates fregides naturals i tots els postres casolans.</h2>
        </div>
      <Slider {...settings}>

        <div>
          <img className="img-pissarra"
            src={pmenu}
            alt="pissarra menú"
          />
        </div>
        <div>
          <img className="img-general"
            src={lentejas}
            alt="lentejas llenties"
          />
        </div>
        <div>
          <img className="img-general"
            src={patates}
            alt="patates casolanes"
          />
        </div>
        <div>
          <img className="img-general"
            src={brocoli}
            alt="brocoli verdura"
          />
        </div>
        <div>
          <img className="img-general"
            src={carrot}
            alt="Carrot Cake"
          />
        </div>
        <div>
          <img className="img-general"
            src={fideua}
            alt="fideua paella"
          />
        </div>
       <div>
          <img className="img-general"
            src={crestes}
            alt="Crestes croquetes empanadillas"
          />
        </div>
        <div>
          <img className="img-general"
            src={salmo}
            alt="peix salmo"
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
export default Menudiari;