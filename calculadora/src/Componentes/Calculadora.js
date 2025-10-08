import { useState } from "react";
import Operadores from "./Operadores";

const Contador = () => {
  const [contador, setContador] = useState("");
  const [resultado, setResultado] = useState("");

  const ImputNumber = (num) => setContador(contador + num);
  const borrar = () => {
    setContador("");
    setResultado("");
  };

  const calcular = () => {
    try {
      setResultado(eval(contador));
    } catch {
      setResultado("Error");
    }
  };

  return (
    <div>
      <h3>Calculadora simple</h3>
      <label>Operación: {contador}</label>
      <br />
      <label>Resultado: {resultado}</label>
      <br />

      {/* Botones numéricos */}
      <div>
        <button onClick={() => ImputNumber(1)}>1</button>
        <button onClick={() => ImputNumber(2)}>2</button>
        <button onClick={() => ImputNumber(3)}>3</button>
        <button onClick={() => ImputNumber(4)}>4</button>
        <button onClick={() => ImputNumber(5)}>5</button>
        <button onClick={() => ImputNumber(6)}>6</button>
        <button onClick={() => ImputNumber(7)}>7</button>
        <button onClick={() => ImputNumber(8)}>8</button>
        <button onClick={() => ImputNumber(9)}>9</button>
        <button onClick={() => ImputNumber(0)}>0</button>
      </div>

      {/* Operadores */}
      <Operadores
        onAdd={(op) => setContador(contador + op)}
        onCalcular={calcular}
        onBorrar={borrar}
      />
    </div>
  );
};

export default Contador;