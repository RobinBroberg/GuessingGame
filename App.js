import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

      if (highScore === 0 || highScore > updatedGuesses) {
        setHighScore(updatedGuesses);
      }

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

      <ImageBackground
        source={require("./assets/guessing-bg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.highscore}>
              Highscore: {highScore != 0 ? highScore : ""}
            </Text>
            <Text style={styles.text}>Guess a number from 1 to 100</Text>

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
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
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
  background: {
    flex: 1,
  },
  highscore: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "700",
    color: "rgb(70, 11, 75)",
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
    color: "rgb(70, 11, 75)",
    fontWeight: "600",
  },
  header: {
    width: "100%",
    backgroundColor: "#1d4ed8",
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
    backgroundColor: "#1d4ed8",
  },
  button: {
    backgroundColor: "#1d4ed8",
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
