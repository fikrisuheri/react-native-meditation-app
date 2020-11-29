import React from 'react'
import { View, Text,StyleSheet,StatusBar,ScrollView, ImageBackground, Dimensions } from 'react-native'
import { ICBell, ILBg, ILBlogImage, ILCardSatu } from '../../assets'
import { BlogCard, ButtonTwo, CardCategory } from '../../components'

function index() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#2748C9" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Selamat Malam,</Text>
                    <Text style={styles.name}>Fikri Suheri,</Text>
                </View>
                <View style={styles.icBell}>
                    <ICBell/>
                </View>
            </View>
            <View style={styles.boxHeader}>
                <ImageBackground source={ILBg} resizeMode="contain" style={styles.cardImage}>
                    <Text style={styles.titleHeaderCard}>Meditasi kesadaran mu</Text>
                    <Text style={styles.titleHeaderDesc}>Bertujuan agar kamu sadar {"\n"}akan perasaan.</Text>
                    <ButtonTwo title="Mulai"/>
                </ImageBackground>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Rekomendasi Untukmu</Text>
                <ScrollView horizontal={true}>
                    <CardCategory title="Motivasi" ilustration={<ILCardSatu />} />
                    <CardCategory title="Rilex" ilustration={<ILCardSatu />} />
                    <CardCategory title="Tidur" ilustration={<ILCardSatu />} />
                    <CardCategory title="Motivasi" ilustration={<ILCardSatu />} />
                    <CardCategory title="Rilex" ilustration={<ILCardSatu />} />
                    <CardCategory title="Tidur" ilustration={<ILCardSatu />} />
                </ScrollView>
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Blog Meditasi</Text>
                <BlogCard title="Cara meditasi untuk Pemula" ilustration={ILBlogImage} />
                <BlogCard title="Cara meditasi untuk Pemula" ilustration={ILBlogImage} />
                <BlogCard title="Cara meditasi untuk Pemula" ilustration={ILBlogImage} />
                <BlogCard title="Cara meditasi untuk Pemula" ilustration={ILBlogImage} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#EDEFF1'
    },
    header : {
        backgroundColor:'#2748C9',
        padding:24,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        height:150,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    icBell:{
        marginTop:14
    },
    greeting : {
        fontFamily:'Poppins-Regular',
        fontSize:16,
        lineHeight:24,
        color:'#FFF',
        letterSpacing:0.5,
        fontWeight:'400'
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        fontFamily:'OpensSans-Regular',
    },
    boxHeader:{
        marginHorizontal:24,
        marginBottom:10
    },
    cardImage:{
        flex:1,
        width:Dimensions.get('window').width - 48,
        height:143,
        marginTop:-65,
        paddingHorizontal:16,
        paddingVertical:20,
    },
    titleHeaderCard:{
        fontFamily:'OpenSans-Bold',
        fontSize:16,
        color:'#000',
        lineHeight:16,
        letterSpacing:0.4
    },
    titleHeaderDesc:{
        fontFamily:'OpenSans-Regular',
        fontSize:14,
        lineHeight:20,
        letterSpacing:0.4,
        marginTop:4,
        marginBottom:16,
        color:'#000',
    },
    box:{
        marginHorizontal:24,
        marginBottom:16
    },
    title:{
        fontSize:14,
        fontFamily:'OpenSans-Bold',
        lineHeight:18,
        marginBottom:8
    }
})

export default index
