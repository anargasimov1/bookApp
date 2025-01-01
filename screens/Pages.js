import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import { content } from '../companents/content'

const Pages = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            {
                content.map((i, index) => {
                    return (
                        <Pressable style={styles.button} key={i.page} onPress={() => navigation.replace('page', { index: index })}>
                            <Text style={styles.text}>
                                Fəsil {index + 1}
                            </Text>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}

export default Pages

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,

    },
    text: {
        fontSize: 18,
        fontFamily: 'serif',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#7982cf',
        marginTop: 10,
        height: 32,
        justifyContent: 'center'
    }
})