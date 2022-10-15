import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 42,
        marginBottom: 42,
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
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    textType: {
        color: '#fff',
        fontWeight: "bold"
    },
    divStats: {
        backgroundColor: '#FF6400',
        margin: 20,
    },
    divStatsInfo: {
        backgroundColor: '#696969',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5
    },
    textStatName: {
        color: '#fff',
        fontWeight: "bold",
        marginRight: 60,
        marginBottom: 10
    },
    textStatBaseStat: {
        color: '#fff',
        fontWeight: "bold",
        backgroundColor: '#696969',
    }
});
