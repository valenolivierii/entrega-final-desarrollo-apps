import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Characters, Character } from "../screens";

const Stack = createNativeStackNavigator();

const CharactersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000"
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Dos",
          fontSize: 22
        },
        // headerRight: () => (
        //   <View>
        //     <Image
        //       source={require("../../assets/img/pan.png")}
        //       style={{ width: 75, height: 50, resizeMode: "contain" }}
        //     />
        //   </View>
        // ),
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Welcome you are" }}
      />
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={({ route }) => ({ title: route.params.species })}
      />
      <Stack.Screen
        name="Character"
        component={Character}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default CharactersNavigator;
