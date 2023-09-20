import React, { useReducer } from "react";

const initialState = { count: 0, op: 1 };

function counterReducer(state, action) {
    switch (action.type) {
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error('Ação não reconhecida');
    }
}

export default function Contador() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            Contagem: {state.count}
            <div><button onClick={() => dispatch({ type: 'inc' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'dec' })}>Decrementar</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Resetar</button></div>
        </div>
    );
}

