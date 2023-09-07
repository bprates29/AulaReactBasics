import React from "react"

export default (props) => {
    const { min, max } = props
    return (
    <>
        <h2>O número sorteado foi 
            <strong> { Math.trunc(getRandomNumber(min, max)) }
            </strong>
        </h2>
    </>)}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }