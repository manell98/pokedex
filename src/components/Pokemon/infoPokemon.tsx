import {Image, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";

const InfoPokemon = (props: any) => {
    const obj = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState({
        abilities: [],
        base_experience: 0
    });

    const abilitiesPokemon = async () => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.nome}`);

        setInfoPokemon(result.data);
    }

    useEffect(() => {
        abilitiesPokemon();
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

export default InfoPokemon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 42,
        marginBottom: 42,
    },
    img: {
        width: 100,
        height: 100,
    },
});
