import React, { useState, useEffect } from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import { content } from '../contents/content'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Pages = ({ navigation }) => {

    const [bgColor, setBgColor] = useState('white')

    const getBgColor = async () => {
        let bgColor = await AsyncStorage.getItem('bgColor')
        if (bgColor) {
            setBgColor(bgColor)
        }
    }

    useEffect(() => {
        getBgColor();
    }, [])

    return (
        <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
            {
                content.map((i, index) => {

                    return (
                        <Pressable style={styles.button} key={i.page} onPress={() => navigation.replace('page', { index: index })}>
                            <Text style={styles.text}>
                                Fəsil {index + 1}
                            </Text>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}

export default Pages

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,


    },
    text: {
        fontSize: 18,
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#7982cf',
        height: 32,
        justifyContent: 'center',
        marginBottom: 25
    }
})