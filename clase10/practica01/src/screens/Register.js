import React, { Component } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
    };
  }
  render() {
    return (

      <View class="contenedor" style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>

        <TextInput  style={styles.input} placeholder='Email' keyboardType='email-adress' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
        <TextInput style={styles.input} placeholder='Nombre de usuario' value={this.state.userName} onChangeText={(text) => this.setState({ userName: text })} />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
        <Pressable style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>
        <Pressable
          onPress={() => props.navigation.navigate("Login")}>
          <Text> Ir a Login</Text>
        </Pressable>

        <Text>Registro</Text>
      </View>
    );
  }

};

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

export default Register;
