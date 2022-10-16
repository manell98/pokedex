import {Image, Text, View} from "react-native";
import axios from "axios";
import {useEffect, useState} from "react";
import {styles, BarraProgressoStats} from "./styles";

import {TipoDoPokemonInterface} from "../interfaces/tipoDoPokemon";
import {EstatisticasDoPokemonInterface} from "../interfaces/estatisticasDoPokemon";
import {PropsPokemon} from "./interface/propsPokemon";
import {InfoPokemon} from "./interface/infoPokemon";

const Index = (props: PropsPokemon) => {
    const infosDoPokemon = props.route.params;

    const [infoPokemon, setInfoPokemon] = useState<InfoPokemon>({
        types: [],
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
            <View style={styles.divNomePokemon}>
                <Text style={styles.texNomePokemon}>{infosDoPokemon.nome[0].toUpperCase() + infosDoPokemon.nome.substring(1)}</Text>
            </View>

            <View style={styles.divInfo}>
                <View style={styles.divInfoHeader}>
                    <Image style={styles.img} source={{uri: infosDoPokemon.urlImg}} accessibilityLabel={infosDoPokemon.nome} />

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
