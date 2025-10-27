import React from 'react';
import { Pressable, Text, View } from 'react-native';

function Profile (props){
return (
    <View>
      <Pressable    
      onPress={ ()=> props.navigation.navigate("Login")}>
              <Text>Desloguearse</Text>
              </Pressable>
      <Text>My Profile</Text>
    </View>
  );


};
 
export default Profile;
