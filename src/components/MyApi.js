import React from "react";
import { useState, useEffect } from "react";
const BuscarComponente = () => {
    const [users, setUsers] = useState([])
    const [buscar, setBuscar] = useState('')

    const url = 'https://jsonplaceholder.typicode.com/users'

    const mostrarDatos = async () => {
        const response = await fetch(url)
        const data = await response.json()
       
        setUsers(data)
    }
    const buscador = (e) =>{
        setBuscar(e.target.value)
        console.log(e.target.value)
        
    }

   const results = !buscar ? users : users.filter( (dato) =>dato.name.toLowerCase().includes(buscar.toLocaleLowerCase())) 
    

    useEffect( () =>{
        mostrarDatos()
    },[])
    return (
        <div>
            <input value={buscar} onChange={buscador} type="text" placeholder="search" className="form-control"/>
            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>Nombre</th>
                        <th>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((users) => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BuscarComponente;