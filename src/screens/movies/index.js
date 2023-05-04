import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  ImageBackground,
  StyleSheet
} from "react-native";
import MoviesStarWars from "../../components/MoviesStarWars";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";

const Movies = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const movies = useSelector((state) => state.movies.filtered);
  
  useEffect(() => {
    setLoading(false);
  }, [movies]);

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
            data={movies}
            keyExtractor={(item) => item.episode_id.toString()}
            renderItem={({ item }) => (
              <MoviesStarWars
                title={item.title}
                item={item}
                navigation={navigation}
                episode={item.episode_id.toString()}
              />
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default Movies;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
    },
    container: {
      margin: 18,
      borderRadius: 6,
      borderColor: colors.white,
      borderWidth: 2,
    },
    externalContainer: {
      flex: 1,
      backgroundColor: colors.black,
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });