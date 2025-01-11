import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FontSize = ({ setFontSize }) => {

    const sizes = [12, 14, 16, 18, 20, 22, 24]
    const [size, setSize] = useState(16)

    async function newSize(par) {
        await AsyncStorage.setItem('size', JSON.stringify(par))
        setFontSize(false)
    }

    async function getSize() {
        let newSize = await AsyncStorage.getItem('size')
        if (newSize)
            setSize(Number(newSize))
    }

    useEffect(() => {
        getSize()
    }, [])




    return (
        <View style={styles.container}>

            {
                sizes.map((i, index) => {
                    return (
                        <Pressable onPress={() => newSize(i)} key={index} style={styles.button}>
                            <Text style={[styles.text, size === i && { color: 'red' }]}>
                                {i} px
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
        backgroundColor: 'lightgrey',
        width: '70%',
        height: '36%',
        left: 50,
        top: 140,
        gap: 10,
        paddingLeft: 25,
        paddingTop: 10,
        zIndex: 20,
        borderWidth: 3,
        borderRadius: 25,
        borderColor: '#efebe2'
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