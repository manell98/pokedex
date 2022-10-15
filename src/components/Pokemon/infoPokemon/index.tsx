import {Image, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import { styles } from "./styles";

const Index = (props: any) => {
    const obj = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState({
        abilities: [],
        base_experience: 0
    });

    const pegarInfoPokemon = async () => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.nome}`);

        setInfoPokemon(result.data);
    }

    useEffect(() => {
        pegarInfoPokemon();
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: obj.urlImg}} accessibilityLabel={obj.nome} />
            <Text>{infoPokemon.base_experience}</Text>
            {
                infoPokemon.abilities.map((objAbilities: any) => (
                    <Text key={objAbilities.ability.url}>{objAbilities.ability.name}</Text>
                ))
            }
        </View>
    );
}

export default Index;
