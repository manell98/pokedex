import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
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
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Index />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42,
    marginBottom: 42,
  }
});
