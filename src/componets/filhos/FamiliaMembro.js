import React from "react";

const familiaMembro = props => {
    return <div key={props.nome}>{props.nome} <strong> {props.sobrenome}</strong></div>
}

export default familiaMembro