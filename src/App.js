import "./App.css";
import { Navbar } from "./MisComponentes/Navbar/Navbar.js";
import "./MisComponentes/Navbar/Navbar.css";
import { Footer } from "./MisComponentes/Footer/Footer.js";
import "./MisComponentes/Footer/footer.css";
import { Productos } from "./MisComponentes/Productos/Productos.js"
import "./MisComponentes/Productos/producto.css"

function App() {
  const prod1 = {
    nombre: 'Boxer sublimado 1',
    talle: 'L',
    color: 'estampado',
    precio: '1500'
  }
  const prod2 = {
    nombre: 'Boxer algodon 100%',
    talle: 'XL',
    color: 'Rojo',
    precio: '1200'
  }
  const prod3 = {
    nombre: 'Boxer sublimado 2',
    talle: 'M',
    color: 'multicolor arcoiris',
    precio: '1500'
  }
  return (
    <>
      <Navbar />
      <h1>NUEVA COLECCION</h1>
      <div className="bodyCard">
      <Productos prod={prod1}/>
      <Productos prod={prod2}/>
      <Productos prod={prod3}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
