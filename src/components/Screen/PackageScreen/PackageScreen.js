import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PackageScreen() {
  return (
    <View style={styles.container}>
      <Text>Package Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
