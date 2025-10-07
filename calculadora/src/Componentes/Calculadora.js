import { useState } from "react";
import Suma from "./Suma";

const Contador = () => {
  const [contador, setContador] = useState(0); // total acumulado
  const [pantalla, setPantalla] = useState(""); // lo que se muestra
  const [resultado, setResultado] = useState(null); // último resultado

  // muestra los números al presionar botones
  const ImputNumber = (num) => setPantalla(pantalla + num);

  // agrega el signo +
  const manejarSuma = () => {
    if (!pantalla.endsWith("+") && pantalla !== "") {
      setPantalla(pantalla + " + ");
    }
  };

  // calcula el resultado
  const calcular = () => {
    try {
      const partes = pantalla.split("+").map((p) => p.trim());
      if (partes.length === 2) {
        const num1 = Number(partes[0]);
        const num2 = Number(partes[1]);
        const res = num1 + num2;
        setResultado(res);
        setPantalla(`${pantalla} = ${res}`);
        setContador(contador + res); // acumula
      }
    } catch {
      setPantalla("Error");
    }
  };

  // limpia la pantalla sin tocar el contador
  const borrar = () => {
    setPantalla("");
    setResultado(null);
  };

  return (
    <div>
      <label>Contador: {contador}</label>
      <br />
      <label>Pantalla: {pantalla}</label>
      <br /><br />

      {/* Botones numéricos */}
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

      <br /><br />

      {/* Botón de suma */}
      <Suma onSumar={manejarSuma} />

      {/* Botón igual */}
      <button onClick={calcular}>=</button>

      {/* Botón borrar */}
      <button onClick={borrar}>Borrar</button>
    </div>
  );
};

export default Contador;
