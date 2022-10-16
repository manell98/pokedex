import {Text, View} from "react-native";
import {styles, DivNomeSection, DivBackgroundSection} from "../styles";
import {DivBalaoInfoProfile, stylesProfile} from "./styles";

const CardProfile = ({ infoPokemon }: any) => {
    return (
        <DivBackgroundSection tipo={infoPokemon.types[0].type.name}>
            <DivNomeSection tipo={infoPokemon.types[0].type.name}>
                <Text style={styles.texNomeSection}>Profile</Text>
            </DivNomeSection>

            <View style={stylesProfile.divTituloInfoProfile}>
                <Text style={stylesProfile.tituloInfoProfile}>Info:</Text>
            </View>

            <View style={stylesProfile.infoProfile}>
                <DivBalaoInfoProfile>
                    <Text style={stylesProfile.textInfoProfile}>Height</Text>
                    <Text style={stylesProfile.textInfoProfile}>{infoPokemon.height/10} m</Text>
                </DivBalaoInfoProfile>

                <DivBalaoInfoProfile>
                    <Text style={stylesProfile.textInfoProfile}>Weight</Text>
                    <Text style={stylesProfile.textInfoProfile}>{infoPokemon.weight/10} kg</Text>
                </DivBalaoInfoProfile>

                <DivBalaoInfoProfile>
                    <Text style={stylesProfile.textInfoProfile}>Level</Text>
                    <Text style={stylesProfile.textInfoProfile}>{infoPokemon.base_experience}</Text>
                </DivBalaoInfoProfile>
            </View>

            <View style={stylesProfile.divTituloInfoProfile}>
                <Text style={stylesProfile.tituloInfoProfile}>Abilities:</Text>
            </View>

            <View style={stylesProfile.infoAbilities}>
                {
                    infoPokemon.abilities.map((objAbilities: any) => (
                        <DivBalaoInfoProfile key={objAbilities.slot}>
                            <Text style={stylesProfile.textInfoProfile}>{objAbilities.ability.name}</Text>
                        </DivBalaoInfoProfile>
                    ))
                }
            </View>
        </DivBackgroundSection>
    );
};

export default CardProfile;
