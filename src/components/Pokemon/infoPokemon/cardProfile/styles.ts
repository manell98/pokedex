import styled from "styled-components/native";
import {StyleSheet} from "react-native";

export const DivBalaoInfoProfile = styled.View`
  margin-left: 20px;
  background-color: #fff;
  height: 50px;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const stylesProfile = StyleSheet.create({
    divTituloInfoProfile: {
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 8,
    },
    tituloInfoProfile: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
    },
    infoProfile: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    textInfoProfile: {
        fontWeight: "bold",
    },
    infoAbilities: {
        padding: 15,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    }
});
