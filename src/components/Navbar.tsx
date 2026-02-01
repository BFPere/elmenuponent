import { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuObert, setMenuObert] = useState(false);

  return (     
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">Bar Cafeteria El Menú</div>

        <ul className={`navbar-menu ${menuObert ? "open" : ""}`}>
          <li><Link to="Inici" onClick={() => setMenuObert(false)}>Inici</Link></li>
          <li><Link to="Cafeteria" onClick={() => setMenuObert(false)}>Cafeteria</Link></li>
          <li><Link to="Esmorzars" onClick={() => setMenuObert(false)}>Esmorzars</Link></li>
          <li><Link to="Menudiari" onClick={() => setMenuObert(false)}>Menu diari</Link></li>
          <li><Link to="Contacte" onClick={() => setMenuObert(false)}>Contacte</Link></li>            
        </ul>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuObert(!menuObert)}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>
    </nav>
  );
    
};

export default Navbar;

// import { useEffect, useRef, useState } from "react";

// const MenuHamburguesa: React.FC = () => {
//   const [obert, setObert] = useState<boolean>(false);
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleClickFora = (e: MouseEvent) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(e.target as Node)
//       ) {
//         setObert(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickFora);

//     return () => {
//       document.removeEventListener("mousedown", handleClickFora);
//     };
//   }, []);

//   return (
//     <>
//       <button onClick={() => setObert((prev) => !prev)}>
//         ☰
//       </button>

//       {obert && (
//         <div ref={menuRef} className="menu">
//           <p>Opció 1</p>
//           <p>Opció 2</p>
//           <p>Opció 3</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default MenuHamburguesa;