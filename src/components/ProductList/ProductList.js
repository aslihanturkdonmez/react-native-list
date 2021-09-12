import React from 'react';
import { FlatList } from 'react-native';

import product_data from '../../product_data.json';
import ProductCard from '../ProductCard';


const ProductList = () => {

    const renderProduct = ({item}) => <ProductCard products={item}/>
    return (
    <FlatList
        keyExtractor={item => item.id}
        data={product_data}
        renderItem={renderProduct}
        numColumns={2}
    />
    )
};

export default ProductList;