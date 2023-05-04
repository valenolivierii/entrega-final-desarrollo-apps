import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";

const Movie = () => {
  const [loading, setLoading] = useState(true);

  const movieData = useSelector((state) => state.movies.selected);
  const { title, opening_crawl, director, producer, release_date, episode_id } = movieData;
  const movie = [
    {
      title,
      opening_crawl,
      director,
      producer,
      release_date,
      episode_id,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  const renderItem = ({ item }) => (
    <>
      <Text style={styles.text}>Title: {item.title}</Text>
      <Text style={styles.text}>Director: {item.director}</Text>
      <Text style={styles.text}>Producer: {item.producer}</Text>
      <Text style={styles.text}>Release date: {item.release_date}</Text>
      <Text style={styles.opening}>{item.opening_crawl}</Text>
    </>
  );

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      <View style={styles.container}>
        {loading ? (
          <Text style={styles.title}>Required info incoming...</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movie}
            renderItem={renderItem}
            keyExtractor={(item) => item.episode_id.toString()}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Movie;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontFamily: "Dos",
      color: colors.white,
      paddingVertical: 10,
      marginBottom: 10,
      textAlign: "center",
    },
    opening: {
      fontSize: 20,
      fontFamily: "Dos",
      color: colors.yellow,
      paddingTop: 30,
      marginBottom: 10,
      textAlign: "center",
    },
    text: {
      fontSize: 20,
      fontFamily: "Dos",
      color: colors.white,
      paddingVertical: 2,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      margin: 18,
      borderRadius: 6,
      borderColor: colors.white,
      borderWidth: 2,
      padding: 20,
    },
    loading: {
      color: colors.white,
    },
    externalContainer: {
      flex: 1,
      backgroundColor: colors.black,
    },
  });
  