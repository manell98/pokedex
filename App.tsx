import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from "./src/components/Pokemon";
import InfoPokemon from "./src/components/Pokemon/infoPokemon";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="indexPokemon" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="indexPokemon" component={Index} />
          <Stack.Screen name="infoPokemon" component={InfoPokemon} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
