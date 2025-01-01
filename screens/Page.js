import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { content } from '../companents/content'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Page = ({ route }) => {

    const { index } = route.params
    const [currentPage, setCurrentPage] = useState(index)

    const conutMinus = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const conutPlus = () => {
        if (currentPage < 14) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.text}>
                    {
                        content[currentPage].contentAz
                    }
                </Text>

                <Text style={{ height: 30 }}></Text>

                <Text style={styles.text}>
                    {
                        content[currentPage].contentAr
                    }
                </Text>

            </View>

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
        paddingLeft: 5
    },

    text: {
        fontSize: 18
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