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
import UsuarioInfoElse from "./componets/condicional/UsuarioInfoElse"
import DiretaPai from './componets/comunicacao/DiretaPai'
import IndiretaPai from './componets/comunicacao/IndiretaPai'

const app = () => (
    <div>
        <IndiretaPai/>

        <DiretaPai/>

        <UsuarioInfoElse usuario={{nome:'Fulano'}}/>
        <UsuarioInfo usuario={{nome:'Bernardo'}}></UsuarioInfo>
        <UsuarioInfo usuario={{email:'Bernardo'}}></UsuarioInfo>

        <ParOuImpar numero={123}/>

        <ListaEventos/>
        <Familia sobrenome="Prates">
            <FamiliaMembro key={1} nome="Bernardo"/>
            <FamiliaMembro key={2} nome="Ciclano"/>
            <FamiliaMembro key={3} nome="Fulano"/>
        </Familia>

        <SortearNum min={1} max={60}/>
        <Fragmento></Fragmento>
        <Comp></Comp>
        <ComParametro nome="UPF em dança"
            data="29/11/2024" />
    </div>
);

export default app