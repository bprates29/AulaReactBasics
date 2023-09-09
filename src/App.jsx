import React from "react"

import Comp from './componets/primeiro/Componente'
import ComParametro from './componets/segundo/ComParametro'
import Fragmento from "./componets/erros/Fragmentos"
import SortearNum from "./componets/aleatorio/SortearNum"
import Familia from "./componets/filhos/Familia"
import FamiliaMembro from "./componets/filhos/FamiliaMembro"
import ListaEventos from "./componets/repeticao/ListaEventos"
import ParOuImpar from "./componets/condicional/ParOuImpar"
import UsuarioInfo from "./componets/condicional/UsuarioInfo"

const app = () => (
    <div>
        <UsuarioInfo usuario={{nome:'Bernardo'}}></UsuarioInfo>
        <UsuarioInfo usuario={{email:'Bernardo'}}></UsuarioInfo>

        <ParOuImpar numero={123}/>

        <ListaEventos/>
        <Familia sobrenome="Prates">
            <FamiliaMembro nome="Bernardo"/>
            <FamiliaMembro nome="Ciclano"/>
            <FamiliaMembro nome="Fulano"/>
        </Familia>

        <SortearNum min={1} max={60}/>
        <Fragmento></Fragmento>
        <Comp></Comp>
        <ComParametro nome="UPF em dança"
            data="29/11/2024" />
    </div>
);

export default app