import {Image, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {styles, BarraProgressoStats} from "./styles";

import {TipoDoPokemonInterface} from "../interfaces/tipoDoPokemon";
import {EstatisticasDoPokemonInterface} from "../interfaces/estatisticasDoPokemon";

const Index = (props: any) => {
    const obj = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState({
        types: [],
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
            <View style={styles.divNomePokemon}>
                <Text style={styles.texNomePokemon}>{obj.nome[0].toUpperCase() + obj.nome.substring(1)}</Text>
            </View>

            <View style={styles.divInfo}>
                <View style={styles.divInfoHeader}>
                    <Image style={styles.img} source={{uri: obj.urlImg}} accessibilityLabel={obj.nome} />

                    {
                        infoPokemon.types.map((objType: TipoDoPokemonInterface) => (
                            <View key={objType.slot} style={styles.divType}>
                                <Text style={styles.textType}>{objType.type.name.toUpperCase()}</Text>
                            </View>
                        ))
                    }
                </View>

                <View style={styles.divStats}>
                    {
                        infoPokemon.stats.map((objStats: EstatisticasDoPokemonInterface) => (
                            <View style={styles.divStatsInfo} key={objStats.stat.name}>
                                <Text style={styles.textStatName}>{objStats.stat.name.toUpperCase()}</Text>

                                <BarraProgressoStats valor={objStats.base_stat}>
                                    <Text style={styles.textStatBaseStat}>{objStats.base_stat}</Text>
                                </BarraProgressoStats>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    );
}

export default Index;
