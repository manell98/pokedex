import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#131016',
    },
    viewInput: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 40,
    },
    input: {
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1F1E25",
        flex: 1,
        padding: 16,
        marginRight: 16,
        color: "#ccc",
    },
    botao: {
        backgroundColor: "#1d7ecb",
        borderRadius: 5,
        height: 56,
        width: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 30,
    },
    containerPrincipalPokemon: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    containerImgPokemon: {
        backgroundColor: "rgba(204,204,204,0.13)",
        marginBottom: 5,
        borderRadius: 5,
        height: 200,
        width: "48%",
        marginRight: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    nomePokemon: {
        fontSize: 18,
        color: "#ccc",
        textAlign: "center",
    },
});
