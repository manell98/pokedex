import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from "./src/components/Pokemon";
import ComponenteInfoPokemon from "./src/components/Pokemon/infoPokemon/componenteInfoPokemon";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="indexPokemon" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="indexPokemon" component={Index} />
            {/*// @ts-ignore */}
            <Stack.Screen name="infoPokemon" component={ComponenteInfoPokemon} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
