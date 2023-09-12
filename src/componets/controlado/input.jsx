import React, { useState } from "react";

const Input = props => {
    const [valor, setValor] = useState('Inicial')

    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor}
                onChange={e => setValor(e.target.value)} />
        </div>
    )
}
export default Input
