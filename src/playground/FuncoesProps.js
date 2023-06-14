import React from "react";

const hello = () => {
    return "hello"
}

const add = (a, b) => {
    return (a + b)
}

export const Rascunhao = () => {
    return (
        <div>
            <h1>TWIST</h1>
            <p>Curso de React</p>
            <ol>
                <li>topico 1</li>
                <li>topico 2</li>
            </ol>
            <button onClick={() => console.log(hello())}>Hello</button>
            <button onClick={() => console.log(add(1, 2))}>1 + 2</button>
        </div>
    )
}