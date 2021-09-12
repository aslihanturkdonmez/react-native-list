import React from 'react';
import { TextInput } from 'react-native';
import styles from './SearchInput.style';

const SearchInput = () => {
    return (
        <TextInput 
            style={styles.input}
            placeholder='Ara...'
        />
    );
};

export default SearchInput;