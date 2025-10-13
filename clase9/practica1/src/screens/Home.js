import React, {Component} from 'react';
import { View , Text , Pressable} from "react-native-web";
import Contador from '../components/Contador';
import { StyleSheet } from 'react-native';

class Home extends Component{
    click(){
        console.log("Me clickearon")
    }

    render() {
        return(
            <View style={styles.container}>
            <Text>Hola Mundo</Text>
            <Pressable onPress={() => this.click()}> 
                    <Text style={styles.texto}> Clickeame </Text> 
                </Pressable> 
                <Contador/>
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    texto: {
        fontWeight: "bold",
        backgroundColor:  "#ccc",
        padding: 4,
        marginBottom: 10,
        borderRadius: 4,
    },
    container: {
        textAlign: 'center',
        padding: 10,
      },
    }
)
    
 
export default Home;