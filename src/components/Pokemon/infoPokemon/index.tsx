import {Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {styles, DivNomePokemon} from "./styles";

import CardInfoPokemon from "./cardInfo";

const Index = (props: any) => {
    const obj = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState({
        types: [{
            slot: 0,
            type: {
                name: "",
                url: ""
            },
        }],
        stats: [],
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
            <DivNomePokemon tipo={infoPokemon.types[0].type.name}>
                <Text style={styles.texNomePokemon}>{obj.nome[0].toUpperCase() + obj.nome.substring(1)}</Text>
            </DivNomePokemon>

            <CardInfoPokemon
                infoPokemon={infoPokemon}
                obj={obj}
            />
        </View>
    );
}

export default Index;
