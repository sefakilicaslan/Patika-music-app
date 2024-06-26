import React, {useState} from "react";
import { SafeAreaView, Text, View, Image, FlatList, StyleSheet } from "react-native";
import music_data from './music_data.json';
import SongCard from "./src/components/SongCard/SongCard";
import SearchBar from "./src/components/SearchBar/SearchBar";

export default () => {
    
    const [list, setList] = useState (music_data);

    const renderSong = ({item}) => <SongCard song={item}/>

    const renderSeperator = () => <View style={styles.seperator}/>

    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searcedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

             return currentTitle.indexOf(searcedText) > -1; 
        })


        setList(filteredList);

    };

    return(
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch} />
                <FlatList
                keyExtractor={item => item.id.toString()}
                data = {list} 
                renderItem={renderSong}
                ItemSeparatorComponent={renderSeperator}
                />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    seperator: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
});