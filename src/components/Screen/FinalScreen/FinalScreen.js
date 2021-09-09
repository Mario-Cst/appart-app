import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput,
  Picker,
} from "react-native";

export default function FinalScreen() {
  return (
    <View style={styles.container}>
      <Text>InicioScreen</Text>
      <TextInput style={styles.textinput} placeholder="Escribe" />
      <Picker />
      <TouchableHighlight style={styles.button}>
        <Text style={styles.textbutton}>Pulsa</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  textinput: {
    backgroundColor: "aliceblue",
    height: 45,
    width: 280,
    borderRadius: 5,
    marginTop: 20,
  },
  button: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 280,
    borderRadius: 5,
    marginTop: 20,
  },
  textbutton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
