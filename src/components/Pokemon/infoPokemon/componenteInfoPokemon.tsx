import {Image, Text, View} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { PropsPokemon } from "./interface/propsPokemon";
import { InfoPokemon } from "./interface/infoPokemon";
import {PokemonHabilidade} from "./interface/pokemonHabilidade";

const ComponenteInfoPokemon = (props: PropsPokemon) => {
    const infosDoPokemon = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState<InfoPokemon>({
        abilities: [],
        base_experience: 0
    });

    const pegarInfoPokemon = async () => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${infosDoPokemon.nome}`);

        setInfoPokemon(result.data);
    }

    useEffect(() => {
        pegarInfoPokemon();
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: infosDoPokemon.urlImg}} accessibilityLabel={infosDoPokemon.nome} />
            <Text>{infoPokemon.base_experience}</Text>
            {
                infoPokemon.abilities.map((objAbilities: PokemonHabilidade) => (
                    <Text key={objAbilities.ability.url}>{objAbilities.ability.name}</Text>
                ))
            }
        </View>
    );
}

export default ComponenteInfoPokemon;
