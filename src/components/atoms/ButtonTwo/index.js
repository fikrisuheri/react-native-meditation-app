import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {Text,StyleSheet} from 'react-native'


const Button = ({title,onPress}) => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3880F3',
        paddingHorizontal:32,
        justifyContent: 'center',
        alignItems: 'center',
        width:129,
        height:30,
        borderRadius:8
    },
    text:{
        fontFamily:'Poppins-Medium',
        color:'#fff',
        fontSize:12,
        lineHeight:16,
        letterSpacing:0.4
    }
})
export default Button