// alert("Webpack is working!")

import React from "react"
import {createRoot} from "react-dom/client"

function App() {
    // Тестовые данные
    const animals = [{ name: "Мурка", species: "кошка" }, { name: "Бобик", species: "собака" }]

    return(
        <div>
            <h1>Привет!</h1>
            <p>Это тестовый компонент из Реакт</p>
            {animals.map(function (animal) {
                return <AnimalCard name={animal.name} species={animal.species} />
            })}
        </div>
    )
}

function AnimalCard(props) {
    return <p>Привет, я {props.species} по имени {props.name}</p>
}


const root = createRoot(document.querySelector("#app"))
root.render(<App />)