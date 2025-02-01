import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fonts from '../companents/Fonts';
import FontSize from '../companents/FontSize';

const Settings = () => {

    const [bgColor, setBgColor] = useState('white')
    const [fonts, setFonts] = useState(false)
    const [fontSize, setFontSize] = useState(false)

    async function getBgColor() {
        try {
            let bgColor = await AsyncStorage.getItem('bgColor');
            if (bgColor) {
                setBgColor(bgColor)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBgColor()
    }, [])


    const setDarkMode = async () => {
        try {
            await AsyncStorage.setItem('color', 'white')
            await AsyncStorage.setItem('bgColor', 'black')
            getBgColor()
        } catch (error) {
            console.log(error)
        }
    }


    const setLightMode = async () => {
        try {
            await AsyncStorage.setItem('color', 'black')
            await AsyncStorage.setItem('bgColor', 'white')
            getBgColor()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <View style={[styles.container, { backgroundColor: bgColor }]}>

                <Pressable onPress={() => setFontSize(true)} style={styles.button}>
                    <Text style={styles.text}>
                        Hərflərin Ölçüsünü Dəyiş
                    </Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => setFonts(true)}>
                    <Text style={styles.text}>
                        Hərflərin Stilni dəyiş
                    </Text>
                </Pressable>

                <Pressable onPress={setLightMode} style={styles.button}>
                    <Text style={styles.text}>
                        Gündüz rejimi
                    </Text>
                </Pressable>

                <Pressable onPress={setDarkMode} style={styles.button}>
                    <Text style={styles.text}>
                        Gecə rejimi
                    </Text>
                </Pressable>

            </View>

            {
                fonts && <Fonts setFonts={setFonts} />
            }
            {
                fontSize && <FontSize setFontSize={setFontSize} />
            }
        </>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingTop: 15,
        paddingHorizontal: 15

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d0623b',
        fontFamily: 'serif'
    },
    button: {
        width: "auto",
        borderColor: '#8b95e6',
        borderWidth: 0.5,
        height: 48,
        paddingLeft: 5,
        justifyContent:'center'

    }
});

