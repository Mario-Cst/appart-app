import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./src/components/Header";
import MainTabComp from "./src/components/MainTabComp";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <View style={styles.maincontent}>
        <MainTabComp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  maincontent: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
