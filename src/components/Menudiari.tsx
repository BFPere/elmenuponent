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
          <h2>Elaborat diàriament amb productes de proximitat... les patates fregides naturals i totes les postres casolanes.</h2>
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
            src={Vitrina}
            alt="Vitrina postres casolanes"
          />
        </div>
        <div>
          <img className="img-general"
            src={Codillo}
            alt="Codillo galta carrillera"
          />
        </div>
        <div>
          <img className="img-general"
            src={Arrozleche}
            alt="Arroz con leche casero"
          />
        </div>
        <div>
          <img className="img-general"
            src={Lasaña}
            alt="Lasaña"
          />
        </div>
        <div>
          <img className="img-general"
            src={Cremaverd}
            alt="Crema verduras"
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