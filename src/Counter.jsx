import React, { useState, useEffect } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)
    const [countDec, setCountDec] = useState(0)

    useEffect(() => {
      console.log(count + 'mudou o estado')
      console.log(countDec + 'mudou o estado')
    }, [count, countDec])
    
    function handleIncrement() {
      setCount(count + 1)
    }

    function handleDecrement() {
      setCountDec(countDec - 1)
    }

    return (
      <>
        <p>Count: {count} {countDec}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    )
  }

export default Counter