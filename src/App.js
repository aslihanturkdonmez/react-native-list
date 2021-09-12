import React from 'react';
import {View,StyleSheet} from 'react-native';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="PATIKASTORE"/>
      <SearchInput/>
      <ProductList/>
    </View>
  )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
})

export default App;



