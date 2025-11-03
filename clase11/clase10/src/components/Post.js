import React from 'react';
import { View, Text} from "react-native";

function Post({data}) {
    return {
        <View>
            <Text> {data.email} </Text>
            <Text> {data.descripcion} </Text>
            <Text> {data.createdAt} </Text>
        /<View>

    }
}

export default Post;