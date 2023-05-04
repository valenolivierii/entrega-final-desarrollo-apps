import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CharactersNavigator from "./starwars";
import MoviesNavigator from "./movies";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import SnapshotNavigator from "./snapshot";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, headerShown: false, tabBarStyle: {display: "flex", backgroundColor: colors.black, borderTopWidth: 0}, tabBarLabelStyle: {color: colors.white, fontSize: 16, fontFamily: "Dos"} }}>
      <BottomTab.Screen
        name="Personajes"
        component={CharactersNavigator}
        options={{ title: "Characters", tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "body" : "body-outline"} size={24} color={colors.white}/>
        ) }}
      />
      <BottomTab.Screen
        name="Peliculas"
        component={MoviesNavigator}
        options={{ title: "Movies", tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "film" : "film-outline"} size={24} color={colors.white}/>
        ) }}
      />
      <BottomTab.Screen
        name="Foto"
        component={SnapshotNavigator}
        options={{title: "Snapshot", tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "camera" : "camera-outline"} size={24} color={colors.white} />
        )}}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
