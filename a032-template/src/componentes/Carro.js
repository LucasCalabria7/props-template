import React from "react";
import {Garagem} from './Garagem'

export function Carro(props) {

    
    return (
        <>
            <h2>{props.carro.nome} </h2>
            <ul>
                <li>Cor: {props.carro.cor}</li>
                <li>Ano: {props.carro.ano}</li>
                <li>Flex: {props.carro.flex}</li>
            </ul>
            <p> Adicionado por : {props.adicionadoPor}</p>
        </>
    )
}