import React from 'react'

const comFilho = props => {
    return (
        <div>
            <span>{props.produto} - </span>
            <span>R${props.preco.toFixed(2)} | </span>
            <span>{props.quantidade}</span>
        </div>
    )
}

export default comFilho