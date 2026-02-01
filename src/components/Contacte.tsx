import React from "react";
import "../css/Slickpere.css"
import background from "../assets/portada.jpg";

const Contacte: React.FC = () => {
  return (
    <>
    <div className="container">
      <div className="info">
        <h1>Bar Cafeteria el Menú</h1>
        <h2>Carrer Ponent, 12</h2>
        <h2>08401 Granollers</h2>
        <h2>+34 623 01 31 33</h2>
      </div>

      <div className="map">
        <iframe
          title="Google Maps - Bar Cafeteria El Menú"
          src="https://www.google.com/maps?q=Bar+Cafeteria+el+Menú+Carrer+Ponent+12,+08401+Granollers&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    <body style={{ 
      backgroundImage: `url(${background})`, 
      backgroundRepeat: "no-repeat", 
      backgroundSize: "cover",
      backgroundColor: "transparent",
      }}>
    </body>   
  </>
  );
};
export default Contacte;