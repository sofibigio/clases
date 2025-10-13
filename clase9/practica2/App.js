import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Probando imágenes</Text>
      <Image style={styles.image} 
        source={require('../practica2/assets/img/zonaMedia.jpeg')}
        resizeMode='contain'/>

      <Image style={styles.image} 
        source={require('../practica2/assets/img/foto2.avif')}
        resizeMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    height: 400,
    width: "100%"
  },
});
