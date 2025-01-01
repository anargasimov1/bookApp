import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { content } from '../companents/headTextContent'

const HeadText = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        {
          content
        }
      </Text>
    </ScrollView>
  )
}

export default HeadText

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8
  },
  text: {
    fontSize: 15,
    fontFamily: 'roboto',
    fontStyle: 'italic'
  }
})