import React from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image,
  Text,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logopart}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../img/logo_header.png")}
        />
        <Text style={styles.text}>Appart</Text>
      </View>
      <TouchableHighlight style={styles.button}>
        <Image source={require("../img/menu.png")} style={styles.imgButton} />
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "orange",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 26,
  },
  logopart: {
    flexDirection: "row",
    paddingRight: 8,
  },
  imgButton: {
    height: 40,
    width: 40,
  },
  button: {
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 45,
    borderRadius: 5,
  },
});
