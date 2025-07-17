import React from 'react';
import { TextInput, View } from 'react-native';
import { SearchAreaStyle } from './search_area_style';


interface SearchAreaProps {
    searchTerm: string;
    labelText: string;
    onChangeText: (text: string) => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ searchTerm, labelText, onChangeText }) => {
    return (
        <TextInput
            placeholder={labelText}
            placeholderTextColor="#999"
            style={SearchAreaStyle.searchInput}
            onChangeText={onChangeText}
            value={searchTerm}
        />
    );
};

export default SearchArea;
