const Operadores = ({ onAdd, onCalcular, onBorrar }) => {
  return (
    <div>
      <button onClick={() => onAdd("+")}>+</button>
      <button onClick={() => onAdd("-")}>-</button>
      <button onClick={() => onAdd("*")}>*</button>
      <button onClick={() => onAdd("/")}>/</button>
      <button onClick={onCalcular}>=</button>
      <button onClick={onBorrar}>Borrar</button>
    </div>
  );
};

export default Operadores;