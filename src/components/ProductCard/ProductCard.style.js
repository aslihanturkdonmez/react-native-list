import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f0ecf4',
        margin:6,
        borderRadius: 10,
        width: Dimensions.get('window').width/2,
        padding: 10,
    },
    image_container:{
        backgroundColor: 'white',
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height/3.5,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize:17,
        marginTop:3,
    },
    price: {
        fontWeight: 'bold',
        color: 'grey',
    },
    stock: {
        color:'red',
        fontWeight:'bold',

    },
    priceStock_container:{
        marginTop:5,
        flex:1,
        justifyContent:'flex-end',
    }
})