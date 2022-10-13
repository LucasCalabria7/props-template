import React from "react"
import { Carro } from "./Carro"

export default function Garagem(props) {
    console.log(props)
    return (
        <section className="garagem">
            <h1>Garagem de {props.nome}</h1>
            <button onClick={() => props.apresentaGaragem(props.nome)} >Clique aqui </button>
            <Carro carro={props.carro1} adicionadoPor={props.nome} />
            <Carro carro={props.carro2} adicionadoPor={props.nome} />
            <Carro carro={props.carro3} adicionadoPor={props.nome} />
            <Carro carro={props.carro4} adicionadoPor={props.nome} />
        </section>
    )
} 

