import {StyleSheet} from "react-native";
import styled from 'styled-components/native';
import {definirCorPadraoPorTipoPokemon, definirCorPorTipoPokemon} from "../utils/utils";
import {TipoPokemon} from "./cardInfo/styles";

export const DivNomeSection = styled.View<TipoPokemon>`
  background-color: ${ ({ tipo }) => {
    // @ts-ignore
    const objCor = definirCorPorTipoPokemon[tipo] || '#ccc';
    
    return objCor.cor;
  } };
  align-items: center;
  justify-content: center;
`;

export const DivBackgroundSection = styled.View<TipoPokemon>`
  background-color: ${ ({ tipo }) => {
    // @ts-ignore
    const objCor = definirCorPorTipoPokemon[tipo] || definirCorPadraoPorTipoPokemon;

    return objCor.corComOpacidade;
} };
`;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        paddingBottom: 42,
        backgroundColor: '#131016',
    },
    texNomeSection: {
        color: '#fff',
        fontSize: 25,
        margin: 10,
        fontWeight: "bold"
    }
});
