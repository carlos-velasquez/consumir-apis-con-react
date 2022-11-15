import React, { useEffect, useState } from "react";
import BuscarComponente from "./components/MyApi";

function App() {

  const [nombre, setNombre] = useState([])
  const [search, setSearch] = useState('')
  const consumirApi = async () => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();

      setNombre(data.results);
    } catch (error) {

    }
  }

  const Resultado = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const ResultadoSearch = !search ? nombre : nombre.filter((doc) => doc.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    consumirApi();
  }, [])

  return (
    <div className="container-fluid">
      <input value={search} onChange={Resultado} type="text" placeholder="search" />
      {ResultadoSearch.map((nombre) => <div key={nombre.id}>
        <h4>{nombre.name}</h4>
        <img src={nombre.image} alt="" />
      </div>)}
      <BuscarComponente />
    </div>
  );
}

export default App;
