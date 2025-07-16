import React from 'react';
import { TextInput, View } from 'react-native';
import { SearchAreaStyle } from './search_area_style';


interface SearchAreaProps {
    searchTerm: string;
    onChangeText: (text: string) => void;
}

const SearchArea: React.FC<SearchAreaProps> = ({ searchTerm, onChangeText }) => {
    return (
        <TextInput
            placeholder="Search agents..."
            placeholderTextColor="#999"
            style={SearchAreaStyle.searchInput}
            onChangeText={onChangeText}
            value={searchTerm}
        />
    );
};

export default SearchArea;
