import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

export const  HomeScreen = ({navigation}) => {


    return (
    <View>
        <Text style = {StyleSheet.text}>HomeScreen</Text>

         <Button
            onPress={() => navigation.navigate('Search')} 
            title="Go to Restaurants"
        />
         <Button
            onPress={() => navigation.navigate('Index')} 
            title="Go to Blog"
        />

        </View>
        );
};

const styles = StyleSheet.create({
text: {
    fontSize: 30
},
});

export default HomeScreen;

