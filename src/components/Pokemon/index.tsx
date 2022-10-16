import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "./styles";
import { InfoPokemonInterface } from "./interfaces/infoPokemon";
import { AntDesign } from "@expo/vector-icons";

const Index = (props: any) => {
    // @ts-ignore
    const [dadosDoPokemon, setDadosDoPokemon] = useState<Array<InfoPokemonInterface>>([] as InfoPokemonInterface);
    const [pokemonInformado, setPokemonInformado] = useState("");
    const [pokemon, setPokemon] = useState<InfoPokemonInterface>({} as InfoPokemonInterface);
    const [valorUserEffect, setValorUserEffect] = useState<boolean>(false);

    const buscarPokemon = async (nomePokemon: string) => {
        const nomePokemonLowerCase: string = nomePokemon.toLowerCase();

        const pokemonEncontrado: InfoPokemonInterface | undefined  = dadosDoPokemon.find((nomePokemon: InfoPokemonInterface) => nomePokemon.nome === nomePokemonLowerCase);

        if (pokemonEncontrado) {
            setPokemon(pokemonEncontrado);
        } else {
            setPokemon({nome: "", img: ""})
            setValorUserEffect(false);
        }
    };

    const listarPokemons = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");

        const arrayPokemons = result.data.results;

        const dadosFormatadosDoPokemon: Array<InfoPokemonInterface> = [];

        arrayPokemons.forEach((pokemon: any, index: number) => {
            dadosFormatadosDoPokemon.push({
                nome: pokemon.name,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            });
        });

        setDadosDoPokemon(dadosFormatadosDoPokemon);
    };

    useEffect(() => {
        listarPokemons();
    }, [valorUserEffect]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(nomePokemon: string) => setPokemonInformado(String(nomePokemon))}
                        placeholder="Digite o nome do pokemon"
                        placeholderTextColor="rgba(204,204,204,0.47)"
                    />
                    <TouchableOpacity style={styles.botao} onPress={() => buscarPokemon(pokemonInformado)}>
                        <AntDesign name="search1" style={styles.textoBotao} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerPrincipalPokemon}>
                    { pokemon.nome ?

                        <View style={styles.containerImgPokemon}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('infoPokemon', {
                                nome: pokemon.nome,
                                urlImg: pokemon.img
                            })}>
                                <Image style={styles.img} source={{uri: pokemon.img}} accessibilityLabel={pokemon.nome} />
                                <Text style={styles.nomePokemon}>{pokemon.nome.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View> :

                        dadosDoPokemon.map((dadosDoPokemon: InfoPokemonInterface, index: number) => (
                            <View key={index} style={styles.containerImgPokemon}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('infoPokemon', {
                                    nome: dadosDoPokemon.nome,
                                    urlImg: dadosDoPokemon.img
                                })}>
                                    <Image style={styles.img} source={{uri: dadosDoPokemon.img}} accessibilityLabel={dadosDoPokemon.nome} />
                                    <Text style={styles.nomePokemon}>{dadosDoPokemon.nome.toUpperCase()}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    );
}

export default Index;
