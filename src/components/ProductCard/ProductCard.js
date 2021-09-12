import React from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({products}) => {
    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                 <Image style={styles.image} source={{uri: products.imgURL}} resizeMode='contain'/>
            </View>
            <Text style={styles.title}>{products.title}</Text>
            <View style={styles.priceStock_container}>
                <Text style={styles.price}>{products.price}</Text>
                {!products.inStock ? 
            <Text style={styles.stock}>STOKTA YOK</Text> 
            :
            null
            }
            </View>
        </View>
    );
};

export default ProductCard;