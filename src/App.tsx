import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inici from "./components/Inici";
import Cafeteria from "./components/Cafeteria";
import Esmorzars from "./components/Esmorzars";
import Footer from "./components/Footer";
import Menudiari from "./components/Menudiari";
import Contacte from "./components/Contacte";
import "./App.css";
import "./css/Navbar.css";

function App() {

  return (

     <>  
   
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/Inici" element={<Inici />} />
            <Route path="/Cafeteria" element={<Cafeteria />} />
            <Route path="/Esmorzars" element={<Esmorzars />} />
            <Route path="/Menudiari" element={<Menudiari />} />
            <Route path="/Contacte" element={<Contacte />} />
            <Route path="*" element={<Navigate to="/Inici" />} /> // per defecte
          </Routes> 
          <Footer />
        </HashRouter>
        
    </>

  );
}

export default App;

