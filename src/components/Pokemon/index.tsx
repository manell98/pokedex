import {Image, TouchableOpacity, View} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "./styles";

const Index = () => {
    const [objImgPokemons, setObjImgPokemons] = useState([{}]);

    const listarPokemons = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");

        const arrayPokemons = result.data.results;

        const arrayImgs: Array<object> = [];

        arrayPokemons.forEach((pokemon: any, index: number) => {
            arrayImgs.push({
                nome: pokemon.name,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            });
        })

        setObjImgPokemons(arrayImgs);
    };

    useEffect(() => {
        listarPokemons();
    }, [objImgPokemons]);


    return (
        <View>
            <View style={styles.div}>
                {
                    objImgPokemons.map((objPokemon: any, index: number) => (
                        <TouchableOpacity key={index}>
                            <Image style={styles.img} source={{uri: objPokemon.img}} accessibilityLabel={objPokemon.nome} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
}

export default Index;
