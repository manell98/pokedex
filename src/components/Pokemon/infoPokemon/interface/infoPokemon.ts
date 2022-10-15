import {PokemonHabilidade} from "./pokemonHabilidade";

export interface InfoPokemon {
    abilities: Array<PokemonHabilidade>;
    base_experience: number;
}