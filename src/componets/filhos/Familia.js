import React from "react";
import FamiliaMembro from "./FamiliaMembro"

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Bernardo" sobrenome={ props.sobrenome }/>
            <FamiliaMembro nome="Ciclano" {...props}/>
            <FamiliaMembro nome="Fulano" sobrenome="Silva"/>
        </div>
    )
}