import React, { Component } from 'react';
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';

class Nuevopost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posteos: [],
            descripcion: "",
            loading: true
        }
    }

    componentDidMount () {
        db.collection('posts').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        posteos: posts,
                        loading: false
                    })

                } )
            }
       ) };

       crearPost(){
        db.collection('posts').add({
            emails: auth.currentUser.email,
            descripcion: this.state.descripcion,
            createdAt: Date.now(),
       })
       .then( r => console.log(r))
       .catch( e => console.log(e) )
};

    render() {
        return (
            <View style={styles.contenedor}>
                <Text style={styles.titulo}> Agrega una publicación: </Text>
                <TextInput style={styles.field}
            placeholder="Escribí tu mensaje:"
            value={this.state.descripcion}
            onChangeText={ text => this.setState({ descripcion: text })}
            />

            <Pressable style={styles.boton} onPress={() => this.crearPost()}>
                <Text style={styles.texto}> Publicar </Text>
            </Pressable>

            <FlatList
          data={this.state.posteos}
          keyExtractor={ item => item.id}
          renderItem={({ item }) =>  <Text> {item.data.email}: {item.data.descripcion} </Text>
          }
        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    field:{
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10, 
        borderRadius: 6,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderWidth: 1,
        marginVertical: 10
    },
    boton:{
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745"
    },
    texto:{
        color: "#fff"
    }, 
    titulo: {
         fontWeight: "bold"
    },
    register: {
          fontWeight: "bold"
      }, 
})



export default Nuevopost
