import React, { useReducer } from "react";

const initialState = { operando: 0, operador: 1, result: 0 };

function CalcReducer(state, action) {
    switch (action.type) {
        case 'setOperando':
            return { ...state, operando: action.payload };
        case 'setOperador':
            return { ...state, operador: action.payload };
        case 'soma':
            return { ...state, result: state.operando + state.operador };
        case 'subtrai':
            return { ...state, result: state.operando - state.operador };
        case 'multiplica':
            return { ...state, result: state.operando * state.operador };
        case 'divide':
            return { ...state, result: state.operando / state.operador };
        case 'limpa':
            return initialState;
        default:
            throw new Error('Ação não reconhecida');
    }
}

export default function CalculadoraReducer() {
    const [state, dispatch] = useReducer(CalcReducer, initialState)

    return (
        <div style={{margin:'10px'}}>
            <h2>Resultado: <strong>{state.result}</strong></h2>
            <div>Operando: <input type="number" value={state.operando}
                onChange={e => dispatch({ type: 'setOperando', payload: +e.target.value })} />
            </div>
            <div>Operador: <input type="number" value={state.operador}
                onChange={e => dispatch({ type: 'setOperador', payload: +e.target.value })} />
            </div>
            <div>
                <button style={{margin:'10px'}} onClick={e => dispatch({type: 'soma'})}>+</button>
                <button style={{margin:'10px'}} onClick={e => dispatch({type: 'subtrai'})}>-</button>
                <button style={{margin:'10px'}} onClick={e => dispatch({type: 'multiplica'})}>*</button>
                <button style={{margin:'10px'}} onClick={e => dispatch({type: 'divide'})}>/</button>
                <button style={{margin:'10px'}} onClick={e => dispatch({type: 'limpa'})}>Limpa</button>
            </div>
        </div>
    )
}