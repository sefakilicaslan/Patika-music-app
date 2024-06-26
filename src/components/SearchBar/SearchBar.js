import React from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import styles from './SearchBar.styles';

export default (props) => {


    return(
        <View style={styles.container}> 
            <TextInput 
            placeholder="Ara..." 
            onChangeText={props.onSearch}/> 
        </View>
    )
}