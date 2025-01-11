import React, { useState, useEffect } from 'react'
import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
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
                        <ImageBackground
                            source={require('../assets/peper.png')}
                            style={styles.image}
                        >
                            <Pressable style={styles.button} key={i.page} onPress={() => navigation.replace('page', { index: index })}>
                                <Text style={styles.text}>
                                    Fəsil {index + 1}
                                </Text>
                            </Pressable>
                        </ImageBackground>
                    )
                })
            }

        </ScrollView>
    )
}

export default Pages

const styles = StyleSheet.create({
    container: {
     
        marginBottom: 15,


    },
    text: {
        fontSize: 19,
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        // backgroundColor: '#b3c0f6',
        height: 35,
        justifyContent: 'center',
        marginBottom: 20
    },
    image: {
        width: Dimensions.get('screen').width,
        paddingTop:15
    }
})