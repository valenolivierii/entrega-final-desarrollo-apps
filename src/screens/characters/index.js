import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  View,
  StyleSheet
} from "react-native";
import CharactersStarWars from "../../components/CharactersStarWars";
import { useSelector } from "react-redux";

const Characters = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const characters = useSelector((state) => state.characters.filtered);

  useEffect(() => {
    setLoading(false);
  }, [characters]);

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      {loading && (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      )}
      {!loading && (
        <View style={styles.container}>
          <FlatList
            data={characters}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CharactersStarWars
                image={`${item?.image}`}
                name={item.name}
                item={item}
                navigation={navigation}
              />
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default Characters;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    container: {
      margin: 18,
      borderRadius: 6,
      borderColor: "#fff",
      borderWidth: 2
    },
    externalContainer: {
      flex: 1,
      backgroundColor: "#000"
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
  