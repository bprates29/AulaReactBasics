import React from "react";

const PassoForm = props => {
    return (

        <div>
            Passo: <input type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}
export default PassoForm