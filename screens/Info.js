import { ImageBackground, StyleSheet, Text } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/peper.png')}
    >
      <Text style={styles.text}>
        {
          `CÖVŞƏNİ-KƏBİR

Bu kitab Azərbaycan Respublikasının Dini Qurumlarla İş üzrə Dövlət Komitəsinin 21.12.2009-cu il DK-594/T nömrəli icazə məktubuna əsasən nəşr olunub. 

Tətbiqin tərtibatçısı:
Anar Qasımov

Təşəbbüskar:
Röyal Eyvazov
Toğrul Bağırov

Tərcüməçi:
Qafar Ocaqlı (İlahiyyatçı-şərqşünas)`
        }

      </Text>
    </ImageBackground>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#050a25'
  }
})