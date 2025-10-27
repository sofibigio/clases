import React, { Component } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import { auth } from '../firebase/config';


class Login extends Component {
  
  constructor(props){
      super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      error: ""
    };
  }

  onSubmit(email, password){
    if (!email.include("@")){
      this.setState({
        error: "Email mal formateado"
      })
     
    }
    else if (this.state.password.length < 6) {
      this.setState({
        error: "La password debe tener una longitud mínima de 6 caracteres"
      })
    }
    else {auth.signInWithEmailAndPassword(email,password)
      .then(res => { this.setState({loggedIn: true});
        this.props.navigation.navigate("HomeMenu")
      })
      .catch(err => {this.setState({error: "Credenciales incorrectas"})
      })
    }
   
};

    render() {
      return (
  
        <View class="contenedor" style={styles.container}>
          <Text style={styles.title}>Login</Text>
  
          <TextInput  style={styles.input} placeholder='Email' keyboardType='email-adress' onChangeText={(text) => this.setState({ email: text }) } value={this.state.email}
            />

          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />

          <Pressable style={styles.button} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
            
          <Pressable
            onPress={ ()=> this.props.navigation.navigate("Register")}>
                  <Text>Ir al Registro</Text>
                  </Pressable>
          <Pressable 
            onPress={ ()=> props.navigation.navigate("HomeMenu")}>
                  <Text>Entrar en la app</Text>
          </Pressable>
          <Text> {this.state.error}</Text>
          <Text>Formulario de Login</Text>
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

  
   
export default Login;