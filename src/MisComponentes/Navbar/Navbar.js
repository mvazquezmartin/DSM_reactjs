import logo from "../../assets/logo100px.png";

export const Navbar = () => {
  return (
    <header className="myHeader">
      <div className="logoImg">
        <img src={logo} alt="logo DSM"></img>
      </div>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
    </header>
  );
};
