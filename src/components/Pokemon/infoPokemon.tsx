import {StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";

const InfoPokemon = (props: any) => {
    const obj = props.route.params;

    const [abilities, setAbilities] = useState([]);

    const abilitiesPokemon = async () => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.nome}`);

        setAbilities(result.data.abilities);
    }

    useEffect(() => {
        abilitiesPokemon();
    }, []);

    return (
        <View style={styles.container}>
            {
                abilities.map((objAbilities: any) => (
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
    }
});
