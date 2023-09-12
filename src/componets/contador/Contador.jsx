import './Contador.css'
import React, { Component } from "react"

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = e => {
        this.setState({
            passo: +e.target.value //+ é penas para converter para numero, pois recebemos string
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor: {this.state.numero}</p>
                <div>
                    Passo: <input type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={_ => this.inc()}>+</button>
                <button onClick={_ => this.dec()}>-</button>
            </div>
        )
    }
}

export default Contador