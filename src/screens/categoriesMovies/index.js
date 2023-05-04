import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { selectMovies } from "../../store/actions";

const CategoriesMovies = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/background.gif")}
    >
      <Image
        source={require("../../../assets/logo.png")}
        style={{ height: 180, resizeMode: "contain" }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(selectMovies("original"))
          navigation.navigate("Movies", { saga: "Original saga" });
        }}
      >
        <Text style={styles.main}>original trilogy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(selectMovies("prequels"))
          navigation.navigate("Movies", { saga: "Prequels" });
        }}
      >
        <Text style={styles.main}>Prequels</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CategoriesMovies;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000"
    },
    main: {
      color: "#ffd409",
      textAlign: "center",
      fontSize: 30,
      fontFamily: "Star-Regular"
    }
  });
