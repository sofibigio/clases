import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }
  onSubmit = () => {
    console.log('Comentario:', this.state.comentario);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dejá tu comentario</Text>

        <TextInput  style={styles.input} placeholder="Escribí tu comentario..." value={this.state.comentario}   onChangeText={(text) => this.setState({ comentario: text })}/>

        <Pressable style={styles.button} onPress={this.onSubmit}> 
            <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   contenedor: {
    paddingHorizontal: 10,
    marginTop: 20
  },
  input:{
    height:20,
    paddingVertical:15,
    paddingHorizontal:10,
    borderWidth:"#ccc",
    borderStyle: "solid",
    borderWidth:6,
    marginVertical:10

  },
  button:{
    backgroundColor:"#28a745",
    paddingHorizontal:10,
    paddingVertical:6,
    textAlign: "center",
    borderWidth:4,
    borderWidth:1,
    borderStyle: "solid",
    borderColor: "28a745"
  },
  buttonText:{
    color: "#fff",

  },
})

export default DynamicForm;
