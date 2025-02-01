import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Fonts = ({ setFonts }) => {

    const fonts = ['roboto', 'cursive', 'serif', 'sans-serif', 'monospace', 'fantasy']
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
                        <Pressable style={styles.button} key={index} onPress={() => setFontFamilyStronge(i)}>
                            <Text style={[font === i && { color: 'red' }, { fontFamily: i, fontSize: 19 }]}>{index + 1}.İstədiyniz fontu seçin</Text>
                            <MaterialIcons style={[styles.icon, font === i && { color: 'green' }]} name='check-circle' />
                        </Pressable>
                    )
                })
            }

            <Pressable onPress={() => setFonts(false)} style={styles.closeButton}>
                <Text style={styles.closeText}>
                    İMTİNA
                </Text>
            </Pressable>

        </View >
    )
}

export default Fonts

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 25,
        top: 0
    },
    icon: {
        fontSize: 27,
        color: "#3f5efb"
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        width: "95%",
        marginBottom: 15,
        alignItems: 'center',
        height: 50
    },
    closeButton: {
        width: "95%",
        height: 50,
        marginTop: 25,
        justifyContent: 'center',
        backgroundColor: '#b9e913'
    },
    closeText: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#071034'
    }
})