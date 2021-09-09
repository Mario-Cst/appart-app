import React from "react";
import { StyleSheet, View } from "react-native";
import PageControl from "./Screen/PageLoader";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MainTabComp() {
  return (
    <View style={styles.maincontent}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={PageControl.HomeScreen} />
          <Tab.Screen name="Rutas" component={PageControl.RouteScreen} />
          <Tab.Screen name="Profile" component={PageControl.ProfileScreen} />
          <Tab.Screen
            name="Inicio de Jornada"
            component={PageControl.InicioScreen}
          />
          <Tab.Screen name="Paqueteria" component={PageControl.PackageScreen} />
          <Tab.Screen
            name="Final de Jornada"
            component={PageControl.FinalScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontent: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
