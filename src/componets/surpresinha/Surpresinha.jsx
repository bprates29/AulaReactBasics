import React from "react";

const Mega = props => {
    
    const [quantidade, setQuantidade] = React.useState('6')
    
    return (
        <div> 
            <div>Quantidade de numeros para gerar:  
                <input type="number"
                value={quantidade}
                onChange={e => setQuantidade(+e.target.value)}
                style={ {'marginLeft':'5px'}} />
            </div>

            <p>Numeros sorteados:
            {gerarNumeros(quantidade, 1, 60).sort(function (a, b) {
                return a - b;
            }).map((it, i, arr) =>
                i === arr.length - 1
                    ? <span key={i}> {it}</span>
                    : <span key={i}> {it},</span>
            )}</p>
        </div>
    )
}

function gerarNumeros(quantidade, min, max) {
    let numsSorteados = []
    for (var i = 0; i < quantidade; i++) {
        let numSorteado = getRandomNumber(min, max)
        while (numsSorteados.includes(numSorteado)) {
            numSorteado = getRandomNumber(min, max)
        }
        numsSorteados.push(numSorteado)
    }
    return numsSorteados
}

function getRandomNumber(min, max) {
    return Math.trunc((Math.random() * (max - min) + min));
}

export default Mega