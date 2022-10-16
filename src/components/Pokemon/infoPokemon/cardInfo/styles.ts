import {StyleSheet} from "react-native";
import styled from 'styled-components/native';
import { definirCorPorTipoPokemon } from "../../utils/utils";

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

export const DivInfo = styled.View<TipoPokemon>`
  background-color: ${ ({ tipo }) => {
    // @ts-ignore
    const objCor = definirCorPorTipoPokemon[tipo] || '#ccc';

    return objCor.corComOpacidade;
} };
`;

export const DivType = styled.View<TipoPokemon>`
  margin-left: 20px;
  background-color: ${ ({ tipo }) => {
    // @ts-ignore
    const objCor = definirCorPorTipoPokemon[tipo] || '#ccc';

    return objCor.cor;
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
    img: {
        width: 100,
        height: 100,
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
