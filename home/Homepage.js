import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';

export default function Home({ navigation }) {

    return (
        <>
            <ImageBackground
                style={styles.container}
                source={require('../assets/background.jpg')}
            >

                <View >

                    <Pressable onPress={() => navigation.navigate('head')}>
                        <Text style={styles.text}>
                            Ön Söz
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('info')}>
                        <Text style={styles.text}>
                            Müəllif Haqqında
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('pages')}>
                        <Text style={styles.text}>
                            Mündəricat
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('content')}>
                        <Text style={styles.text}>
                            Epiloq
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('settings')}>
                        <Text style={styles.text}>
                            Sazlamalar
                        </Text>
                    </Pressable>

                </View>

            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'start',
        marginTop: 10,
        fontSize: 28,
        color: "#1f0a56",
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: "serif"
    }
});
