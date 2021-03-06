import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
// import { Button } from "react-native-ui-kitten";
import logo from "../../assets/logo.png";
function Home(props) {
  const { navigation } = props;

  const character = {
    name: "Roberta Drapper",
    home: "Mars",
    species: "Human",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To app name</Text>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Test")}
        >
          <Text style={styles.buttonText}>Go to test file</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Detail", { item: character })}
        >
          <Text style={styles.buttonText}>Who is {character.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Camera", { item: character })}
        >
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb",
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  logo: {
    width: 305,
    height: 159,
  },
});

export default Home;
