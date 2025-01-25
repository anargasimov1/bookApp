import React, { useState, useEffect } from 'react'
import { Alert, Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Pages = ({ navigation }) => {

    const [bgColor, setBgColor] = useState('white')

    const getBgColor = async () => {
        try {
            let bgColor = await AsyncStorage.getItem('bgColor')
            if (bgColor)
                setBgColor(bgColor)
        } catch (error) {
            Alert.alert("xəta baş verdi!")
        }

    }

    useEffect(() => {
        getBgColor();
    }, [])

    return (
        <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>

            {
                Array.from({ length: 100 }).map((_, index) => (
                    <ImageBackground
                        source={require('../assets/peper.png')}
                        style={styles.image}
                        key={index}
                    >
                        <Pressable style={styles.button} onPress={() => navigation.replace('page', { index: index })}>
                            <Text style={styles.text}>
                                Fəsil {index + 1}
                            </Text>
                        </Pressable>
                    </ImageBackground>
                ))
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
        height: 35,
        justifyContent: 'center',
        marginBottom: 20
    },
    image: {
        width: Dimensions.get('screen').width,
        paddingTop: 15
    }
})