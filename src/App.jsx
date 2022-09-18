import {useEffect, useState } from "react";
import ListaAnimais from "./components/ListaAnimais";

function App() {
  const [dados, setDados] = useState([]);

  const apagarDados = () => {
    setDados([]);
  };

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/https://zoo-animal-api.herokuapp.com/")
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI.slice(0, 5)));
  }, []);

  return (
    <main>
      <section className="container">
        <h1>{dados.length} animal</h1>

        <ListaAnimais dados={dados} />

        <button className="btn-azul" type="button" onClick={atualizarDados}>
          Gerar novo animal 
        </button>
      </section>
    </main>
  );
}

export default App;