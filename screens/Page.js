import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { contentAr } from '../contents/contentAr'
import { contetnAz } from '../contents/contetnAz'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Page = ({ route }) => {

    const { index } = route.params
    const [currentPage, setCurrentPage] = useState(index)
    const [color, setColor] = useState('black')
    const [background, setBaclground] = useState('white')
    const [fontStyle, setFontStyle] = useState('serif')
    const [fontSize, setFontSize] = useState(16)

    const CONTENTAZ = contetnAz.split("*");
    const CONTENTAR = contentAr.split("*")

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
        try {
            let bgColor = await AsyncStorage.getItem('bgColor')
            if (bgColor) {
                setBaclground(bgColor)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const getFontStyle = async () => {
        try {
            let fontFamily = await AsyncStorage.getItem('fontStyle')
            if (fontFamily)
                setFontStyle(fontFamily)
        } catch (error) {
            console.log(error)
        }
    }

    const getSize = async () => {
        try {
            let size = await AsyncStorage.getItem('size')
            if (size)
                setFontSize(Number(size))
        } catch (error) {
            console.log(error)
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
            <ImageBackground
                style={styles.peper}
                source={background === "white" && require('./../assets/peper.png')}>
                <ScrollView style={[background === "black" && { backgroundColor: background }]}>
                    <Text style={{ fontSize: fontSize, fontFamily: fontStyle, textAlign: 'center', marginTop: 15, color: 'red' }}>
                        Rəhman və Rəhim Allahın adı ilə
                    </Text>
                    <Text style={[styles.text, { color: color, fontFamily: fontStyle, fontSize: fontSize }]}>
                        {

                            CONTENTAZ[currentPage]
                        }
                    </Text>
                    <View style={{ flexDirection: "row", overflow: "hidden" }}>
                        {
                            Array.from({ length: 80 }).map((_, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 22, fontWeight: "bold", color: '#d0623b' }} key={index}>
                                            *
                                        </Text>
                                        <Text>  </Text>
                                    </View>
                                )
                            })
                        }
                    </View>


                    <Text style={{ color: "red", fontFamily: fontStyle, fontSize: fontSize, textAlign: 'right', marginBottom: 40 }}>

                        {
                            CONTENTAR[currentPage].slice(0, 92)

                        }
                        <Text style={[styles.text, { color: color, fontFamily: fontStyle, fontSize: fontSize, textAlign: 'right' }]}>
                            {
                                CONTENTAR[currentPage].slice(93, CONTENTAR[currentPage].length)
                            }
                        </Text>

                    </Text>

                </ScrollView>

            </ImageBackground >


            <View style={styles.buttons}>

                <Pressable style={styles.buttonLeft} onPress={conutPlus}>
                    <AntDesign name='right' style={styles.icon} />
                </Pressable>

                <Pressable style={styles.buttonRight} onPress={conutMinus}>
                    <AntDesign name='left' style={styles.icon} />
                </Pressable>

            </View>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
        paddingBottom: 50,
        paddingHorizontal: 5
    },

    buttonLeft: {
        width: Dimensions.get('screen').width / 4,
        height: Dimensions.get('screen').height / 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: "flex-end",
        alignItems: 'flex-end',

    },
    buttonRight: {
        width: Dimensions.get('screen').width / 4,
        height: Dimensions.get('screen').height / 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    buttonIcon: {
        fontSize: 40,
        color: '#4a58d3'
    }
    ,
    peper: {
        flex: 1,
        paddingTop: 25,
        position: 'relative'
    },
    icon: {
        fontSize: 35,
        color: '#1551b5',
        margin: 5,
        opacity: 0.7
    }

})