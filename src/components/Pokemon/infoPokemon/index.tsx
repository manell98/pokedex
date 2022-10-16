import {Image, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {styles, BarraProgressoStats, DivStatsInfo, DivType, DivNomePokemon, DivInfo} from "./styles";

import {TipoDoPokemonInterface} from "../interfaces/tipoDoPokemon";
import {EstatisticasDoPokemonInterface} from "../interfaces/estatisticasDoPokemon";

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

            <DivInfo tipo={infoPokemon.types[0].type.name}>
                <View style={styles.divInfoHeader}>
                    <Image style={styles.img} source={{uri: obj.urlImg}} accessibilityLabel={obj.nome} />

                    {
                        infoPokemon.types.map((objType: TipoDoPokemonInterface) => (
                            <DivType key={objType.slot} tipo={objType.type.name}>
                                <Text style={styles.textType}>{objType.type.name.toUpperCase()}</Text>
                            </DivType>
                        ))
                    }
                </View>

                <View style={styles.divStats}>
                    {
                        infoPokemon.stats.map((objStats: EstatisticasDoPokemonInterface) => (
                            <DivStatsInfo key={objStats.stat.name} valor={objStats.base_stat}>
                                <Text style={styles.textStatName}>{objStats.stat.name.toUpperCase()}</Text>

                                <BarraProgressoStats valor={objStats.base_stat}>
                                    <Text style={styles.textStatBaseStat}>{objStats.base_stat}</Text>
                                </BarraProgressoStats>
                            </DivStatsInfo>
                        ))
                    }
                </View>
            </DivInfo>
        </View>
    );
}

export default Index;
