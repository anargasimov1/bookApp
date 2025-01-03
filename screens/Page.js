import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { content } from '../contents/content'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Page = ({ route }) => {

    const { index } = route.params
    const [currentPage, setCurrentPage] = useState(index)
    const [color, setColor] = useState('black')
    const [background, setBaclground] = useState('white')
    const [fontStyle, setFontStyle] = useState('serif')
    const [fontSize, setFontSize] = useState(16)

    const conutMinus = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const conutPlus = () => {
        if (currentPage < 99) {
            setCurrentPage(currentPage + 1)
        }
    }


    const getColorStronge = async () => {
        let color = await AsyncStorage.getItem('color')
        if (color) {
            setColor(color)
        }
    }

    const getBgColorStronge = async () => {
        let bgColor = await AsyncStorage.getItem('bgColor')
        if (bgColor) {
            setBaclground(bgColor)
        }
    }


    const getFontStyle = async () => {
        let fontFamily = await AsyncStorage.getItem('fontStyle')
        if (fontFamily)
            setFontStyle(fontFamily)
    }

    const getSize = async () => {
        let size = await AsyncStorage.getItem('size')
        if (size) {
            setFontSize(Number(size))

        }

    }


    useEffect(() => {
        getColorStronge(),
            getBgColorStronge(),
            getFontStyle(),
            getSize();
    }, [])


    return (
        <>
            <ScrollView style={[styles.container, { backgroundColor: background }]}>

                <Text style={[styles.text, { color: color, fontFamily: fontStyle, fontSize: fontSize }]}>
                    {
                        content[currentPage].contentAz
                    }
                </Text>

                <Text style={{ height: 10, textAlign: 'center' }}></Text>

                <Text style={[styles.text, { color: color, fontFamily: fontStyle, fontSize: fontSize }]}>
                    {
                        content[currentPage].contentAr
                    }
                </Text>

            </ScrollView>

            <View style={styles.buttons}>

                <Pressable style={styles.button} onPress={conutMinus}>
                    <AntDesign name='leftcircle' style={styles.buttonIcon} />
                </Pressable>

                <Pressable style={styles.button} onPress={conutPlus}>
                    <AntDesign name='rightcircle' style={styles.buttonIcon} />
                </Pressable>

            </View>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingLeft: 5,
        marginBottom: 70,

    },

    text: {
        fontSize: 18,
        marginBottom: 25
    },
    buttons: {
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20


    },
    button: {
        width: 50
    },
    buttonIcon: {
        fontSize: 40,
        color: '#4a58d3'
    }
})