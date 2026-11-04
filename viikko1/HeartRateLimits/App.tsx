import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>(""); //string käytetään, koska TextInput palauttaa aina stringin

  const ageAsNumber: number = parseFloat(age.replace(",", ".")); //muuttaa pilkkuarvon pisteeksi ja muuttaa stringin numeroksi
  const isValid: boolean = !isNaN(ageAsNumber); //tarkistaa onko syötetty arvo numero
  const lower: number = isValid ? (220 - ageAsNumber) * 0.65 : 0; //lasketaan alaraja, jos syöte on validi, muuten 0
  const upper: number = isValid ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />
      <Text>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upper.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#999",
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    width: 100,
    marginVertical: 8,
  },
});