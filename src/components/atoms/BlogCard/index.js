import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function index({ title, ilustration }) {
    return (
        <View style={styles.container}>
            <Image source={ilustration} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
            <View>
                <Text style={styles.date}>Jun 29, 2020</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 16,
        borderRadius: 5,
        backgroundColor:'#FFF',
        shadowColor: "#E3E7EC",
        paddingBottom:10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.13,
        shadowRadius: 4.51,
        elevation: 8,
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: '#000',
        marginTop:8,
        marginLeft:8
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 100
    },
    date:{
        color:'#808080',
        fontFamily:'OpenSans-SemiBold',
        fontSize:12,
        marginVertical:2,
        marginHorizontal:8
    }
})
export default index
