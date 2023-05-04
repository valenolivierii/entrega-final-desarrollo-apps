import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { selectCharacter } from '../store/actions'

const CharactersStarWars = ({ image, name, item, navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => {
                dispatch(selectCharacter(name))
                navigation.navigate("Character", { name: item.name})
            }}>
                <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default CharactersStarWars