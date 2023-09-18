import React, { useCallback, useState } from 'react'

const Button = React.memo(({handleClick, name}) => {
  console.log(`${name} renderizado`)
  return <button onClick={handleClick}>{name}</button>
})

const Counter = () => {

console.log('Contador renderizado')
  const [count1, setCountOne] = useState(0)
  const [count2, setCountTwo] = useState(0)
  const memoizedSetCountOne = useCallback(() => setCountOne(count1 + 1), [count1])
  const memoizedSetCountTwo = useCallback(() => setCountTwo(count2 + 1), [count2])
  return (
    <div style={{marginBottom: '20px'}}>
      <h3>{count1} - {count2}</h3>
      <Button handleClick={memoizedSetCountOne} name="Botão1" />
      <Button handleClick={memoizedSetCountTwo} name="Botão2" />
    </div>
  )
}

export default Counter