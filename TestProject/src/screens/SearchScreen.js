import React, { useState, useEffect} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

export const  SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price == '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price ===price;
        })
    };
 
    return (
    <>
        <SearchBar 
        term = {term} onTermChange = {setTerm}
        onTermSubmit = {() => searchApi(term)}   
        />
        {errorMessage ? <Text style = {StyleSheet.text}> {errorMessage}</Text>: null}
        <ScrollView>
            <ResultsList
             results = {filterResultsByPrice('$')}
              title = "Cost Effective"
              />
            <ResultsList
             results = {filterResultsByPrice('$$')}
              title = "Bit Pricier"
              />
            <ResultsList
             results = {filterResultsByPrice('$$$')}
              title = "Big spender"
              />
         </ScrollView>
     </>
        );
};

const styles = StyleSheet.create({
text: {
    fontSize: 30
},
});

export default SearchScreen;