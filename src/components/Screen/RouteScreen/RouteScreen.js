import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RouteScreen() {
  return (
    <View style={styles.container}>
      <Text>RouteScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
});
