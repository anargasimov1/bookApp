import React from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'
import { content } from '../contents/headTextContent'

const HeadText = () => {

  return (
    <ScrollView>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/peper.png')}
      >
        <Text style={styles.text}>
          {
            content
          }
        </Text>
      </ImageBackground>
    </ScrollView>
  )
}

export default HeadText

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontFamily: 'serif',
    fontStyle: 'italic',
    marginBottom: 25
  },
  imageBackground: {
    paddingTop: 25,
  }
})