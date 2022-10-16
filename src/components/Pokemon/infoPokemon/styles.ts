import {StyleSheet} from "react-native";
import styled from 'styled-components/native';

const definirCorBarraDeProgresso = (valor: number) => {
    let cor = '#8B0000';

    if (valor >= 60 && valor < 80) cor = '#FF8C00';

    if (valor >= 80) cor = '#006400';

    return cor;
}

export type BarraProgressoType = {
    valor: number;
}

export type TipoPokemon = {
    tipo: string;
}

const definirCorPorTipoPokemon = {
    "bug": "#BDB76B",
    "dragon": "#0000FF",
    "electric": "#FFA500",
    "fairy": "#FF1493",
    "fighting": "#8B0000",
    "fire": "#FF6400",
    "flying": "#00008B",
    "grass": "#006400",
    "ground": "#808000",
    "ice": "#87CEEB",
    "normal": "#F4A460",
    "poison": "#8B008B",
    "rock": "#696969",
    "steel": "#2F4F4F",
    "water": "#1E90FF",
}

export const DivNomePokemon = styled.View<TipoPokemon>`
  background-color: ${ ({ tipo }) => {
    // @ts-ignore
    return definirCorPorTipoPokemon[tipo] || '#ccc'
  } };
  align-items: center;
  justify-content: center;
`;

export const DivType = styled.View<TipoPokemon>`
  margin-left: 20px;
  background-color: ${ ({ tipo }) => {
      // @ts-ignore
    return definirCorPorTipoPokemon[tipo] || '#ccc'
  } };
  height: 40px;
  width: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const DivStatsInfo = styled.View<BarraProgressoType>`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin: 2px;
  border-style: solid;
  border-width: 2px;
  border-radius: 25px;
  border-color: ${ ({ valor }) => definirCorBarraDeProgresso(valor) };
`;

export const BarraProgressoStats = styled.View<BarraProgressoType>`
  height: 100%;
  width: ${ ({ valor }) => valor >= 30 ? valor : 30 }px;
  background-color: ${ ({ valor }) => definirCorBarraDeProgresso(valor) };
  border-style: solid;
  border-radius: 15px;
  border-color: transparent;
  align-items: flex-start;
  padding: 5px;
`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        paddingBottom: 42,
        backgroundColor: '#131016',
    },
    img: {
        width: 100,
        height: 100,
    },
    texNomePokemon: {
        color: '#fff',
        fontSize: 25,
        margin: 10,
        fontWeight: "bold"
    },
    divInfo: {
        backgroundColor: "rgba(255,100,0,0.55)",
    },
    divInfoHeader: {
        marginLeft: 20,
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
    },
    textType: {
        color: '#fff',
        fontWeight: "bold"
    },
    divStats: {
        margin: 20,
    },
    textStatName: {
        color: '#fff',
        fontWeight: "bold",
        paddingRight: 10,
    },
    textStatBaseStat: {
        color: '#fff',
        fontWeight: "bold",
    },
});
