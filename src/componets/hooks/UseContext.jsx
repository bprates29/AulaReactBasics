import React, { useContext } from "react";
import DataContext from "../../dados/Contexto";
import { AppContext } from "../../dados/Store";

const UseContext = props => {

    const context = useContext(DataContext)

    const { matricula, setMatricula } = useContext(AppContext)
    const { nome, setNome } = useContext(AppContext)

    return <div>
        <h2>Exercicio 2</h2>
        <h3>Nome: {nome}</h3>
        <h3>Matricula: {matricula}</h3>
        <div>
            Mudar nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div>
            Adicionar +1: <button onClick={e => setMatricula(matricula + 1)}>+1</button>
        </div>

        <h2>Exercicio 1</h2>
        <h3>Nome: {context.user} </h3>
        <h3>Matricula: {context.number}</h3>
    </div>
}
export default UseContext