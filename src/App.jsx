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
import Input from './componets/controlado/input'
import Contador from './componets/contador/Contador'
import UseEffects from './componets/hooks/StateEffects'
import UseRef from "./componets/hooks/UseRef"
import UseMemo from "./componets/hooks/UseMemo"
import UseCallback from "./componets/hooks/UseCallback"
import UseContext from "./componets/hooks/UseContext"

const app = () => (
    <div>
        <UseContext/>

        <UseCallback />
        
        <UseMemo />

        <UseRef />

        <UseEffects />

        <Contador numeroInicial={10} />

        <Input />

        <IndiretaPai />

        <DiretaPai />

        <UsuarioInfoElse usuario={{ nome: 'Fulano' }} />
        <UsuarioInfo usuario={{ nome: 'Bernardo' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: 'Bernardo' }}></UsuarioInfo>

        <ParOuImpar numero={123} />

        <ListaEventos />
        <Familia sobrenome="Prates">
            <FamiliaMembro key={1} nome="Bernardo" />
            <FamiliaMembro key={2} nome="Ciclano" />
            <FamiliaMembro key={3} nome="Fulano" />
        </Familia>

        <SortearNum min={1} max={60} />
        <Fragmento></Fragmento>
        <Comp></Comp>
        <ComParametro nome="UPF em dança"
            data="29/11/2024" />
    </div>
);

export default app