import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const FontSize = ({ setFontSize }) => {

    const sizes = [12, 14, 16, 18, 20, 22, 24]
    const [size, setSize] = useState(16)

    async function newSize(par) {
        try {
            await AsyncStorage.setItem('size', JSON.stringify(par))
        } catch (error) {
            Alert.alert('xeta baş verdi!')
        }
        setFontSize(false)
    }

    async function getSize() {
        try {
            let newSize = await AsyncStorage.getItem('size')
            if (newSize)
                setSize(Number(newSize))
        } catch (error) {
            Alert.alert("xeta baş verdi!")
        }

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
                            <Text style={[styles.text, size === i && { color: 'green' }]}>
                                {i} px
                            </Text>
                            <MaterialIcons style={[styles.icon, size === i && { color: 'green' }]} name='check-circle' />
                        </Pressable>
                    )
                })
            }

            <Pressable onPress={() => setFontSize(false)} style={styles.closeButton}>
                <Text style={styles.closeText}>
                    İMTİNA
                </Text>
            </Pressable>
        </View>
    )
}

export default FontSize

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        gap: 15,
        paddingTop: 15,
        zIndex: 20,
        backgroundColor: 'white'
    },
    button: {
        borderWidth: 0.5,
        width: '95%',
        paddingLeft: 15,
        height: 50,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'


    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3f5efb',
        width: "70%"
    },
    icon: {
        fontSize: 27,
        color: "#3f5efb"
    }
    ,
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