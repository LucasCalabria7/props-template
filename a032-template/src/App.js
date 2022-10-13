import React from "react";
import "./App.css";
import Garagem from "./componentes/Garagem";

export default function App() {
  const nome = "Labenu"
  const carro1 = {
    cor: "Azul",
    ano: 1990,
    nome: "Fusca",
    flex: "não"
  }
  const carro2 = {
    cor: "Preto",
    ano: 2002,
    nome: "Gol",
    flex: "sim"
  }
  const carro3 = {
    cor: "Vermelho",
    ano: 2022,
    nome: "Uno",
    flex: "sim"
  }
  const carro4 = {
    cor: "Branco",
    ano: 1983,
    nome: "Kombi",
    flex: "não"
  }

  const nome2 = "Calabria"

  const carro5 = {
    cor: "Violeat",
    ano: 2023,
    nome: "Lambo",
    flex: "não"
  }

  const carro6 = {
    cor: "Amarelo",
    ano: 2019,
    nome: "Camaro",
    flex: "sim"
  }

  const carro7 = {
    cor: "Azul",
    ano: 2020,
    nome: "Subaru",
    flex: "sim"
  }

  const carro8 = {
    cor: "Cinza",
    ano: 2021,
    nome: "Tesla",
    flex: "sim"
  }

  function apresentaGaragem () {
    return alert(`Olá essa é a garagem de ${nome2}`)
  }

  return (
    <div className="App">
      <Garagem nome={nome}
      apresentaGaragem={apresentaGaragem}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}/>

      <Garagem nome={nome2}
      apresentaGaragem={apresentaGaragem}
      adicionadoPor={nome2}
      carro1={carro5}
      carro2={carro6}
      carro3={carro7}
      carro4={carro8}/>
    </div>
  );
}
