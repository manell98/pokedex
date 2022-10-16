import {Image, Text, View} from "react-native";
import {BarraProgressoStats, DivStatsInfo, DivType, styles} from "./styles";
import {TipoDoPokemonInterface} from "../../interfaces/tipoDoPokemon";
import {EstatisticasDoPokemonInterface} from "../../interfaces/estatisticasDoPokemon";
import {DivBackgroundSection} from "../styles";

const CardInfoPokemon = ({ obj, infoPokemon }: any) => {
    return (
        <DivBackgroundSection tipo={infoPokemon.types[0].type.name}>
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
        </DivBackgroundSection>
    );
};

export default CardInfoPokemon;
