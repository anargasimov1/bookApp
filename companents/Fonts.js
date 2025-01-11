import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Fonts = ({ setFonts }) => {

    const fonts = ['roboto', 'cursive', 'serif', 'sans-serif']

    const [font, setFont] = useState('serif')

    const setFontFamilyStronge = async par => {
        try {
            await AsyncStorage.setItem('fontStyle', par);
        } catch (error) {
            console.log(error)
        }
        setFonts(false)
    }

    useEffect(() => { getFont() }, [])


    const getFont = async () => {
        try {
            let selectedFont = await AsyncStorage.getItem('fontStyle');
            if (selectedFont)
                setFont(selectedFont)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={styles.container}>

            {
                fonts.map((i, index) => {
                    return (
                        <Pressable key={index} onPress={() => setFontFamilyStronge(i)}>
                            <Text style={[font === i && { color: 'red' }, { fontFamily: i, fontSize: 16, marginTop: 15 }]}>{index + 1}.İstədiyniz fontu seçin</Text>
                        </Pressable>
                    )
                })
            }

        </View>
    )
}

export default Fonts

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#d4d6dc',
        top: 150,
        left: 30,
        width: '80%',
        height: '25%',
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 25
    },
    button: {
        position: 'absolute',
        right: -2,
        top: -10,
        width: 22
    },
    icon: {
        fontSize: 28,
        color: 'red'
    }
})