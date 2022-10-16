import {ScrollView, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {styles, DivNomeSection} from "./styles";

import {PropsPokemon} from "./interface/propsPokemon";
import CardInfoPokemon from "./cardInfo";
import CardProfile from "./cardProfile";

const Index = (props: PropsPokemon) => {
    const infosDoPokemon = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState({
        abilities: [],
        base_experience: 0,
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
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${infosDoPokemon.nome}`);

        setInfoPokemon(result.data);
    }

    useEffect(() => {
        pegarInfoPokemon();
    }, []);

    return (
        <View style={styles.container}>
            <DivNomeSection tipo={infoPokemon.types[0].type.name}>
                <Text style={styles.texNomeSection}>{infosDoPokemon.nome[0].toUpperCase() + infosDoPokemon.nome.substring(1)}</Text>
            </DivNomeSection>

            <ScrollView>
                <CardInfoPokemon
                    infoPokemon={infoPokemon}
                    obj={infosDoPokemon}
                />

                <CardProfile
                    infoPokemon={infoPokemon}
                />
            </ScrollView>
        </View>
    );
}

export default Index;
