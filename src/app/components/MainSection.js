"use client";
import React, { useState, useEffect } from "react";
import CustomSelect from "./CustomSelect";
import PokeCard from "./PokeCard";

export default function MainSection() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  //Criando as opções para os selects
  const options1 = [
    { value: "casa1", label: "Casa 1" },
    { value: "casa2", label: "Casa 2" },
    { value: "casa3", label: "Casa 3" },
  ];

  const options2 = [
    { value: "apartamento1", label: "Apartamento 1" },
    { value: "apartamento2", label: "Apartamento 2" },
    { value: "apartamento3", label: "Apartamento 3" },
  ];

  const options3 = [
    { value: "loja1", label: "Loja 1" },
    { value: "loja2", label: "Loja 2" },
    { value: "loja3", label: "Loja 3" },
  ];

  //Chamando a api PokeApi
  const fetchAllPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      data.results.forEach((item, index) => {
        item.id = index + 1;
      });
      setPokemonList(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  //Fazendo a função que faz com que a escolha dos pokemons dentro da api seja de forma randomica
  const handleRandomPokemon = () => {
    const randomPokemonIndexes = [];

    while (randomPokemonIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      if (!randomPokemonIndexes.includes(randomIndex)) {
        randomPokemonIndexes.push(randomIndex);
      }
    }

    const randomPokemons = randomPokemonIndexes.map(
      (index) => pokemonList[index]
    );

    setPokemonData(randomPokemons);
  };

  //Criando a função para limpar o formulário
  function handleClearForm(e) {
    e.preventDefault();
    setSelectedOption1("");
    setSelectedOption2("");
    setSelectedOption3("");
    setTextareaValue("");
  }

  //função de envio de submit do form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log dos valores selecionados no console
    console.log("Selected Option 1:", selectedOption1);
    console.log("Selected Option 2:", selectedOption2);
    console.log("Selected Option 3:", selectedOption3);
    console.log("Textarea Value:", textareaValue);
  };

  return (
    <div className="mt-8 lg:grid lg:grid-cols-2 gap-6 p-10">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col xl:px-20">
        <div className="flex flex-1 flex-col gap-3 p-5 bg-gray-100 rounded-md">
          <label htmlFor="note" className="text-sm font-medium text-slate-500">
            Adicione um texto:
          </label>

          <textarea
            id="note"
            autoFocus
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            className="text-sm leading-6 text-slate-400 resize-none flex-1 outline-none bg-white p-3 rounded-md"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-4">Selects</h1>
          <div className="grid grid-cols-2 gap-2">
            <CustomSelect
              options={options1}
              onChange={setSelectedOption1}
              value={selectedOption1}
            />
            <CustomSelect
              options={options2}
              onChange={setSelectedOption2}
              value={selectedOption2}
            />
            <CustomSelect
              options={options3}
              onChange={setSelectedOption3}
              value={selectedOption3}
            />
          </div>
        </div>
        <div className="flex gap-x-4">
          <button
            type="submit"
            className="w-full bg-slate-200 py-4 text-center text-sm text-slate-900 outline-none font-medium hover:bg-slate-300 rounded-md mt-3"
          >
            Enviar para o console
          </button>
          <button
            type="button"
            onClick={handleClearForm}
            className="w-full bg-slate-200 py-4 text-center text-sm text-slate-900 outline-none font-medium hover:bg-slate-300 rounded-md mt-3"
          >
            Limpar form
          </button>
        </div>
      </form>
      <div className="mt-4 lg:mt-0">
        <div className="mb-4">
          <h2 className="text-xl font-bold p-2">Sua equipe Pokemon:</h2>
          <div className="flex justify-between">
            {pokemonData.map((pokemon, index) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleRandomPokemon}
          className="w-full bg-slate-200 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-slate-300 rounded-md mt-3"
        >
          Selecione sua equipe
        </button>
      </div>
    </div>
  );
}
