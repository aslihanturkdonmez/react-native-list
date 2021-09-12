import React from 'react';
import { Text } from 'react-native';
import styles from './Header.style';

const Header = (props) => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    );
};

export default Header;