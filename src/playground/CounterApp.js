import React, { useState, useEffect } from "react"

export const CounterApp = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')))
    const [text, setText] = useState(JSON.parse(localStorage.getItem('text')) || "count")

    const addOne = () => {
        setCount(count+1);
    } 

    const minusOne = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    } 

    useEffect(() => {
        localStorage.setItem('count', count)
        localStorage.setItem('text', JSON.stringify(text))
    }, [count, text])

    return (
        <div>
            <h1>TWIST</h1>
            <h3>o valor de {text} é {count}</h3>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}