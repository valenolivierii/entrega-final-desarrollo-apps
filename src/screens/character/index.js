import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Character = () => {
  const [loading, setLoading] = useState(true);

  const character = useSelector((state) => state.characters.selected);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      <View style={styles.container}>
        {loading ? (
          <Text style={styles.title}>Required info incoming...</Text>
        ) : (
          <>
            <Text style={styles.text}>Name: {character.name}</Text>
            <Text style={styles.text}>Height: {character.height}</Text>
            <Text style={styles.text}>Gender: {character.gender}</Text>
            {character.bornLocation && <Text style={styles.text}>Born location: {character.bornLocation}</Text>}
            {character.homeworld && <Text style={styles.text}>Homeworld: {character.homeworld}</Text>}
            {character.diedLocation && <Text style={styles.text}>Death location: {character.diedLocation}</Text>}
            {character.hairColor && <Text style={styles.text}>Hair: {character.hairColor}</Text>}
            {character.eyesColor && <Text style={styles.text}>Eyes: {character.eyesColor}</Text>}
            {character.skinColor && <Text style={styles.text}>Skin: {character.skinColor}</Text>}
            {character.cybernetics && <Text style={styles.text}>Cybernetics: {character.cybernetics}</Text>}
            {character.creator && <Text style={styles.text}>Creator: {character.creator}</Text>}
            {character.manufacturer && <Text style={styles.text}>Manufacturer: {character.manufacturer}</Text>}
            {character.model && <Text style={styles.text}>Model: {character.model}</Text>}
            {character.platingColor && <Text style={styles.text}>Plating: {character.platingColor}</Text>}
            {character.masters && <Text style={styles.text}>Masters: {character.masters}</Text>}
            {character.apprentices && <Text style={styles.text}>Apprentices: {character.apprentices}</Text>}
            {character.class && <Text style={styles.text}>Class: {character.class}</Text>}
            {character.sensorColor && <Text style={styles.text}>Sensor: {character.sensorColor}</Text>}
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Character;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontFamily: "Dos",
      color: "#fff",
      paddingVertical: 5,
      marginBottom: 10,
      textAlign: "center"
    },
    text: {
      fontSize: 20,
      fontFamily: "Dos",
      color: "#fff",
      paddingVertical: 2
    },
    container: {
      flex: 1,
      backgroundColor: "#000055",
      margin: 20,
      borderRadius: 6,
      borderColor: "#fff",
      borderWidth: 2,
      padding: 20
    },
    loading: {
      color: "#fff"
    },
    externalContainer: {
      flex: 1,
      backgroundColor: "#000"
    }
  });
  