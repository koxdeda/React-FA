import React from 'react';
import {Text, StyleSheet, View, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export const  SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
    <View style = {styles.backgroundStyle}>
       <Icon name='search' style = {styles.iconStyle}  /> 
        <TextInput
        autoCapitalize = "none"
        autoCorrect = {false}
         style = {styles.inputStyle} 
         placeholder = "Search"
         onChangeText = {onTermChange}
         onEndEditing = {onTermSubmit}
         />
     </View>
        );
};

const styles = StyleSheet.create({
    backgroundStyle: {  
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;