import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesMovies, Movies, Movie } from "../screens";

const Stack = createNativeStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CategoriesMovies"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Dos",
          fontSize: 22,
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
        name="CategoriesMovies"
        component={CategoriesMovies}
        options={{ title: "Welcome you are" }}
      />
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={({ route }) => ({ title: route.params.saga })}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
