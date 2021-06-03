import { Dimensions, StyleSheet, PixelRatio } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:'2%',
        backgroundColor:'#FAFAFA'
    },
    scroll:{
        width: '100%'
    },
    headerSlider:{
        flex: 4,
        justifyContent:'space-between',
        paddingTop:'5%'
    },
    albumsSlider:{
        flex: 3,
        justifyContent:'space-between',
    },
    player:{
        flex: 1.5,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomBar:{
        flex: 1.2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:'5%'
    },
    sizeContainer:{
        width:'100%', 
        height:'80%'
    },
    circleOne:{
        width: Dimensions.get("window").width*40/100,
        height: Dimensions.get("window").width*40/100,
        borderRadius: (Dimensions.get("window").width*40/100) / 2,
        marginBottom:-Dimensions.get("window").width*20/100,
        zIndex:1,
    },
    circleTwo:{
        width: Dimensions.get("window").width*25/100,
        height: Dimensions.get("window").width*25/100,
        borderRadius: (Dimensions.get("window").width*25/100) / 2,
        marginBottom:-Dimensions.get("window").width*12.5/100,
        zIndex:1,
    },
    itemcontainer:{
        height:'100%',
        alignItems:'center',
    },
    itemOneD:{
        width: Dimensions.get("window").width*60/100,
    },
    itemTwoD:{
        width: Dimensions.get("window").width*45/100,
    },
    itemOneZ:{
        width: (Dimensions.get("window").width*60/100)-10,
    },
    itemTwoZ:{
        width: (Dimensions.get("window").width*45/100)-10,
    },
    shadow:{
        height: '60%',
        backgroundColor:'white',
        borderRadius:15,
        shadowColor: "#C4E2FF",
        shadowOffset: {
            width:0,
            height:0,
        },
        shadowOpacity: 0.58,
        shadowRadius: 15,
        justifyContent:'flex-end',
        elevation: 24,
        alignItems:'center',
        padding: '5%'
    },
    title:{
        fontSize: PixelRatio.get() <= 2 ? 20 : 22,
        color: '#555555'
    },
    playerBanner:{
        height:Dimensions.get("window").height*11/100 ,
        width: '100%',
        backgroundColor:'white',
        borderRadius:(Dimensions.get("window").height*11/100)/2,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:'2%',
        backgroundColor:'white',
        shadowColor: "#000000",
        shadowOffset: {
            width:0,
            height:0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        
        elevation: 24,
    },
    minialbum:{
        width: Dimensions.get("window").height*9/100 ,
        height: Dimensions.get("window").height*9/100 ,
        borderRadius:(Dimensions.get("window").height*9/100)/2,
    },
    albumText:{
        width:'40%',
    },
    albumIcons:{
        width:'30%', 
        flexDirection:'row', 
        justifyContent:'space-around'
    },
    bottomIcon:{
        width: '7%',
        height: '10%',
        right: 5,
        position: "absolute",
        top: 5,
        zIndex:10
    },
    music:{
        color: '#646464',
        fontSize: PixelRatio.get() <= 2 ? 15 : 17,
        marginBottom:'4%'
    },
    vokal:{
        color: '#646464',
        fontSize: PixelRatio.get() <= 2 ? 14 : 16,
    }
})
export default styles