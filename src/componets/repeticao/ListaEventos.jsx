import React from "react"
import eventos from "../../dados/eventos"
const listaEventos = props => {
    const eventosLi = eventos.map( evento => {
        return (<li key={evento.id}> {evento.id}) {evento.nome} - {evento.data}</li>)})
    return <div> <ul style={ {listStyle: 'none'} }> {eventosLi} </ul> </div>
}
export default listaEventos