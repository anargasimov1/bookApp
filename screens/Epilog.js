import { Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { epiloqueAz, epiloqAr } from '../contents/epiloque'

const Epiloq = () => {

    return (
        <ImageBackground source={require('../assets/peper.png')}>
            <ScrollView style={{ paddingHorizontal: 5 }}>

                <Text style={{ fontSize: 18, fontFamily: "serif" }}>
                    {
                        epiloqueAz
                    }
                </Text>

                <Text style={{ fontSize: 18, fontFamily: "serif", textAlign: 'right', marginBottom: 10 }}>
                    {
                        epiloqAr
                    }
                </Text>

            </ScrollView>
        </ImageBackground>
    )
}

export default Epiloq