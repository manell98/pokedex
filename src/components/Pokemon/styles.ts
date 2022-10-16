import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    div: {
        marginTop: 42,
        marginBottom: 42,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: '#708090',
    },
    img: {
        width: 100,
        height: 100,
    },
    viewInput: {
        width: "100%",
        marginBottom: 12,
        alignItems: "center",
    },
    input: {
        height: 56,
        borderRadius: 5,
        backgroundColor: "#ddd",
        paddingLeft: 10,
        paddingRight: 10,
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#111",
        borderRadius: 5,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 7,
        paddingRight: 7,
    },
    textoBotao: {
        color: "#fff",
    }
});
