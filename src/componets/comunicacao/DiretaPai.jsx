import React from "react";
import DiretaFilho from './DiretaFilho'

const comPai = props => {
    return (
        <div>
            <DiretaFilho produto='bola' preco={12.9} quantidade={10} />
            <DiretaFilho produto='boneca' preco={19.9} quantidade={30} />
        </div>
    )
}

export default comPai