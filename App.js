import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [target] = useState(Math.floor(Math.random() * 100) + 1);

  function handleGuess() {
    const number = Number(guess);

    if (number < target) {
      setMessage("För lågt");
    } else if (number > target) {
      setMessage("För högt");
    } else if (number === target) {
      setMessage("Snyggt, du hade rätt!");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Gissa ett nummer mellan 1 och 100</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={guess}
          onChangeText={setGuess}
        ></TextInput>
        <Button title="Gissa" onPress={handleGuess}></Button>
      </View>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
