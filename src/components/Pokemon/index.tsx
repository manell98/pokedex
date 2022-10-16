import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { styles } from "./styles";
import { InfoPokemonInterface } from "./interfaces/infoPokemon";

const Index = (props: any) => {
    // @ts-ignore
    const [dadosDoPokemon, setDadosDoPokemon] = useState<Array<InfoPokemonInterface>>([] as InfoPokemonInterface);
    const [pokemonInformado, setPokemonInformado] = useState("");
    const [pokemon, setPokemon] = useState<InfoPokemonInterface>({} as InfoPokemonInterface);

    const buscarPokemon = async (nomePokemon: string) => {
        const nomePokemonLowerCase: string = nomePokemon.toLowerCase();

        const pokemonEncontrado: InfoPokemonInterface | undefined  = dadosDoPokemon.find((nomePokemon: InfoPokemonInterface) => nomePokemon.nome === nomePokemonLowerCase);

        if (pokemonEncontrado) {
            setPokemon(pokemonEncontrado);
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
    }, []);

    return (
        <ScrollView>
            <View style={styles.div}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(nomePokemon: string) => setPokemonInformado(String(nomePokemon))}
                        placeholder="Digite o nome do pokemon"
                        placeholderTextColor="#111"
                    />
                    <TouchableOpacity style={styles.botao} onPress={() => buscarPokemon(pokemonInformado)}>
                        <Text style={styles.textoBotao}>Buscar Pokemon Informado</Text>
                    </TouchableOpacity>
                </View>

                { pokemon.nome ?
                    <TouchableOpacity onPress={() => props.navigation.navigate('infoPokemon', {
                        nome: pokemon.nome,
                        urlImg: pokemon.img
                    })}>
                        <Image style={styles.img} source={{uri: pokemon.img}} accessibilityLabel={pokemon.nome} />
                    </TouchableOpacity> :
                    dadosDoPokemon.map((dadosDoPokemon: InfoPokemonInterface, index: number) => (
                        <TouchableOpacity key={index} onPress={() => props.navigation.navigate('infoPokemon', {
                            nome: dadosDoPokemon.nome,
                            urlImg: dadosDoPokemon.img
                        })}>
                            <Image style={styles.img} source={{uri: dadosDoPokemon.img}} accessibilityLabel={dadosDoPokemon.nome} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}

export default Index;
