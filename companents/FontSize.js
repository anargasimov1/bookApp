import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FontSize = ({ setFontSize }) => {

    const sizes = [12, 14, 16, 18, 20, 22, 24]

    async function newSize(par) {
        await AsyncStorage.setItem('size', JSON.stringify(par))
        setFontSize(false)
    }




    return (
        <View style={styles.container}>

            {
                sizes.map((i, index) => {
                    return (
                        <Pressable onPress={() => newSize(i)} key={index} style={styles.button}>
                            <Text style={styles.text}>
                                  {i} pikcel
                            </Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}

export default FontSize

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '70%',
        height: '35%',
        left: 50,
        top: 150,
        gap: 10,
        paddingLeft: 15,
        zIndex: 20
    },
    button: {
        width: 128,

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3f5efb',
        width: 125
    }
})