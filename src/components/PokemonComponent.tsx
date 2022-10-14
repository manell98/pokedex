import {Image, Text, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import axios from "axios";
import { styles } from "./stylesPokemon";

const PokemonComponent = () => {
    const [pokemons, setPokemons] = useState([]);

    const [objImgPokemons, setObjImgPokemons] = useState([{}]);

    const listarPokemons = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");

        setPokemons(result.data.results);
    };

    const listarImgPokemons = () => {
        const arrayImgs: Array<object> = [];

        pokemons.forEach((pokemon: any, index: number) => {
            arrayImgs.push({
                nome: pokemon.name,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            });
        })

        setObjImgPokemons(arrayImgs);
    };

    return (
        <View>
            <TouchableOpacity onPress={listarPokemons}>
                <Text>Listar Pokemons!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={listarImgPokemons}>
                <Text>Listar imgs Pokemons!</Text>
            </TouchableOpacity>

            <View style={styles.div}>
                {
                    objImgPokemons.map((objPokemon: any, index: number) => (
                        <Image style={styles.stretch} key={index} source={{uri: objPokemon.img}} accessibilityLabel={objPokemon.nome} />
                    ))
                }
            </View>
        </View>
    );
}

export default PokemonComponent;
