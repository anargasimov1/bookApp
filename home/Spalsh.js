import { StyleSheet, View, Image, Dimensions } from 'react-native'

const Spalsh = ({ navigation }) => {

    setTimeout(() => {navigation.replace("home")}, 4000);

    return (
        <View>
            <Image style={styles.image} source={require('../assets/splash.png')} />
        </View>
    )
}

export default Spalsh

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get('screen').height,
        objectFit: 'contain'
    }
})