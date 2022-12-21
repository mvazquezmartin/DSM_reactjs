export const Productos = ({ prod }) => {
  return (    
    <div className="prodCard">
      <div>
        <img src="" alt=""></img>
      </div>
      <div>
        <h2>{prod.nombre}</h2>
        <p>Talle: {prod.talle}</p>
        <p>Color: {prod.color} </p>
        <p>$ {prod.precio} </p>
      </div>
    </div>    
  );
};
