import React from "react"

import Comp from './componets/primeiro/Componente'
import ComParametro from './componets/segundo/ComParametro'
import Fragmento from "./componets/erros/Fragmentos"
import SortearNum from "./componets/aleatorio/SortearNum"
import Familia from "./componets/filhos/Familia"

export default () => (
    <div>
        <Familia sobrenome="Prates"></Familia>

        <SortearNum min={1} max={60}/>
        <Fragmento></Fragmento>
        <Comp></Comp>
        <ComParametro nome="UPF em dança"
            data="29/11/2024" />
    </div>
);
