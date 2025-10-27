import React, { Component } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';

class Login extends Component {
  constructor(props){
      super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  

    render() {
      return (
  
        <View class="contenedor" style={styles.container}>
          <Text style={styles.title}>Login</Text>
  
          <TextInput  style={styles.input} placeholder='Email' keyboardType='email-adress' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
          <Pressable style={styles.button} onPress={this.onSubmit()}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable onPress={() => this.props.navigation.navigate("Login")}>
            <Text> Ir a Register</Text>
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
  });
 
    <View>

      <Pressable
        onPress={ ()=> props.navigation.navigate("Register")}>
              <Text>Ir al Registro</Text>
              </Pressable>
      <Pressable 
        onPress={ ()=> props.navigation.navigate("HomeMenu")}>
              <Text>Entrar en la app</Text>
              </Pressable>
      
      <Text>Formulario de Login</Text>
    </View>
  
   
export default Login;