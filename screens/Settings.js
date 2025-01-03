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
        let bgColor = await AsyncStorage.getItem('bgColor');
        if (bgColor) {
            setBgColor(bgColor)
        }
    }

    useEffect(() => {
        getBgColor()
    }, [])


    const setDarkMode = async () => {
        await AsyncStorage.setItem('color', 'white')
        await AsyncStorage.setItem('bgColor', 'black')
        getBgColor()
    }


    const setLightMode = async () => {
        await AsyncStorage.setItem('color', 'black')
        await AsyncStorage.setItem('bgColor', 'white')
        getBgColor()
    }


    return (
        <>
            <View style={[styles.container, { backgroundColor: bgColor }]}>

                <Pressable onPress={() => setFontSize(true)} style={styles.button}>
                    <Text style={styles.text}>
                        Şiriftin Ölçüsünü Dəyiş
                    </Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => setFonts(true)}>
                    <Text style={styles.text}>
                        Şiriftin Stilni dəyiş
                    </Text>
                </Pressable>

                <Pressable onPress={setLightMode} style={styles.button}>
                    <Text style={styles.text}>
                        Gündüz
                    </Text>
                </Pressable>

                <Pressable onPress={setDarkMode} style={styles.button}>
                    <Text style={styles.text}>
                        Gecə
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
        alignItems: 'center',
        gap: 20,
        paddingTop: 150

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d0623b',
        fontFamily: 'serif'
    },
    button: {
        width: 250,
        borderColor: '#8b95e6',
        borderWidth: 0.5,
        height: 28,
        paddingLeft: 5,
        borderRadius: 25

    }

});

