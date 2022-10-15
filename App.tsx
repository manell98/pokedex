import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Index from "./src/components/Pokemon";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Index />
    </View>
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
