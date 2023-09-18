import React, { useState } from "react";

const inicialState = {
    nome: "Bernardo Prates",
    matricula: 987654
}
export const AppContext = React.createContext(inicialState)

const Store = props => {
    const [state, setState] = useState(inicialState)

    function update(key, value) {
        setState(
            {
                ...state,
                [key]: value
            }
        )
    }

    return (
        <AppContext.Provider value={{
            matricula: state.matricula,
            nome: state.nome,
            setMatricula: n => update('matricula', n),
            setNome: t => update('nome', t)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store