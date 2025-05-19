import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  function handleGuess() {
    const number = Number(guess);

    if (number < target) {
      setMessage(`${number} is too low!`);
      setGuess("");
      setNumberOfGuesses((prev) => prev + 1);
    } else if (number > target) {
      setMessage(`${number} is too high!`);
      setGuess("");
      setNumberOfGuesses((prev) => prev + 1);
    } else if (number === target) {
      const updatedGuesses = numberOfGuesses + 1;
      setMessage(
        `Nice! ${number} was correct!\nIt took ${updatedGuesses} guesses.`
      );
      setTarget(Math.floor(Math.random() * 100) + 1);
      setGuess("");
      setNumberOfGuesses(0);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GuessingGame</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Guess a number between 1 and 100</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={guess}
            onChangeText={setGuess}
          />
          <TouchableOpacity style={styles.button} onPress={handleGuess}>
            <Text style={styles.buttonText}>Guess</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{message}</Text>
      </View>
    </SafeAreaView>
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
    height: 45,
    width: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 22,
    color: "#333",
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#2471a3",
    alignItems: "center",
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#2471a3",
  },
  button: {
    backgroundColor: "#2471a3",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
