import React, { useContext, useEffect } from 'react';
import {Text, StyleSheet, View, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';



const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost, getBlogPosts} = useContext(Context);

    useEffect( () => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () =>{
            getBlogPosts();
        });
        return () => {
            listener.remove();
        };

    }, []);

    return (
        <View>
            <FlatList
             data = {state}
             keyExtractor = {(blogPost) =>  blogPost.title}
             renderItem = {({item}) => {
             return (  
                 <TouchableOpacity onPress = {() => navigation.navigate('Show', {id: item.id})}>     
                    <View style = {styles.row}>
                        <Text style = {styles.title}> {item.title} - {item.id} </Text>
                        <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                        <Icon style = {styles.icon} name = "delete" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
             }
            }
             />
        </View>
        );
        };

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:() => (
             <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
        <Icon name = 'plus' size = {30} style = {styles.topIcon}/>
        </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create ({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth:1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
    topIcon: {
        paddingRight: 10,
    }
});

export default IndexScreen;