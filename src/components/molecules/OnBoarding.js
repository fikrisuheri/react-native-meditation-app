import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { ILCharkra } from '../../assets'
import { Button } from '../atoms'
function index({title,subtitle,description,ilustration,onNext,onSkip }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#2748C9', }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#2748C9" />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.image}>
                    {ilustration}
                </View>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.description}>
                    {description}
            </Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.lewati} onPress={onSkip}>Lewati</Text>
                <Button title="Lanjutkan" onPress={onNext} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        paddingTop: 34
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily:'Poppins-Bold',
        textAlign: 'center',
        marginBottom: 55
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
        fontFamily:'Poppins-Bold',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        alignSelf: 'center',
        width: 327
    },
    description: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginHorizontal: 39,
        lineHeight: 21,
        fontFamily:'Poppins-Light',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        alignItems: 'center',
        marginTop: -30
    },
    lewati: {
        fontSize: 16,
        letterSpacing: 0.5,
        color: '#FFFFFF',
        opacity: 0.6,
        paddingHorizontal: 42
    }
})

export default index
