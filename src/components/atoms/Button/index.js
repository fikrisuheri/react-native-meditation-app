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
        backgroundColor:'#FFF',
        paddingHorizontal:32,
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:50,
        borderRadius:8
    },
    text:{
        color:'#2748C9',
        fontSize:16,
        fontWeight:'bold',
        lineHeight:16,
        letterSpacing:0.4
    }
})
export default Button