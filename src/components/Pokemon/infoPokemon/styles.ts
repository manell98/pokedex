import {StyleSheet} from "react-native";
import styled from 'styled-components/native';

export type BarraProgressoType = {
    valor: number;
}

export const BarraProgressoStats = styled.View.attrs({}) <BarraProgressoType>`
  height: 100%;
  width: ${ ({ valor }) => valor }px;
  background-color: ${ ({ valor }) => {
    let cor = '#8B0000';
    
    if (valor >= 60 && valor < 80) cor = '#FF8C00';
    
    if (valor >= 80) cor = '#006400';
    
    return cor;
  } };
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;
  border-color: #B0C4DE;
  align-items: flex-start;
  padding: 5px;
`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginBottom: 42,
        backgroundColor: '#708090',
    },
    img: {
        width: 100,
        height: 100,
    },
    divNomePokemon: {
        backgroundColor: '#FF6400',
        alignItems: "center",
        justifyContent: "center",
    },
    texNomePokemon: {
        color: '#fff',
        fontSize: 25,
        margin: 10,
        fontWeight: "bold"
    },
    divInfo: {
        marginTop: 10,
    },
    divInfoHeader: {
        marginLeft: 20,
        width: '100%',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
    },
    divType: {
        marginLeft: 20,
        backgroundColor: '#FF6400',
        height: 40,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    textType: {
        color: '#fff',
        fontWeight: "bold"
    },
    divStats: {
        margin: 20,
    },
    divStatsInfo: {
        flexDirection: 'row-reverse',
        alignItems: "center",
        justifyContent: "space-between",
        margin: 2,
    },
    textStatName: {
        color: '#fff',
        fontWeight: "bold",
        marginBottom: 10,
    },
    textStatBaseStat: {
        color: '#fff',
        fontWeight: "bold",
    },
});
