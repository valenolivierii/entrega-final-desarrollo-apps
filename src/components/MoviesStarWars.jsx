import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { selectMovie } from '../store/actions'

const MoviesStarWars = ({ episode, title, item, navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => {
                dispatch(selectMovie(title))
                navigation.navigate("Movie", { title: item.title })
            }}>
                <Image source={episode == 1 && require('../../assets/movies/1.jpg') || episode == 2 && require('../../assets/movies/2.jpg') || episode == 3 && require('../../assets/movies/3.jpg') || episode == 4 && require('../../assets/movies/4.jpg') || episode == 5 && require('../../assets/movies/5.jpg') || episode == 6 && require('../../assets/movies/6.jpg')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default MoviesStarWars