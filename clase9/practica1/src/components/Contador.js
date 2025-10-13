import React, {Component} from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

class Contador extends Component {
    constructor(props) {
    super(props);
    this.state = {
        clicks: 0,
    };
    }

    incrementar(){
        this.setState({clicks: this.state.clicks + 1});
    }

    render() {
        return (
            <View style={styles.contador}> 
                <Text> Cantidad de clicks: {this.state.clicks} </Text>

            <Pressable onPress={() => this.incrementar()}>
            <Text style={styles.clickeable}> Click aquí para contar</Text>
            </Pressable>
            </View> 

        )

    }
    
}

const styles = StyleSheet.create({
    contador: {
        marginTop: 5,
    },
    clickeable: {
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4,
        fontWeight: "bold",
    }
    }
)
    

export default Contador;