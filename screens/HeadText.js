import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { content } from '../contents/headTextContent'

const HeadText = () => {

  return (
    <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { fontSize: fontSize, color: color }]}>
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