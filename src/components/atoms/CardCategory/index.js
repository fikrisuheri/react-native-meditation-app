import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function index({title,ilustration}) {
    return (
       <View style={styles.container}>
           <View style={styles.image}>
            {ilustration}
           </View>
           <Text style={styles.text}>{title}</Text>
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1970FE',
        marginRight:16,
        borderRadius:10,
        paddingBottom:20,
    },
    text:{
        textAlign:'center',
        fontFamily:'OpenSans-Bold',
        fontSize:14,
        color:'#fff',
        marginTop:-13
    },
    image:{

    }
})
export default index
