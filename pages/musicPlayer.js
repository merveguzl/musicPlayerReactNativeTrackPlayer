import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native'

export default function musicPlayer({setPage, setActive, active, next, stopChange, back, onStop, setOnStop ,playerNew}) {

    const [player, setPlayer] = useState(0);

    useEffect(async () => {
      playerNew(active)
    }, [])

   
    const onCheck = () =>{
        setPage(false)
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress= {()=> onCheck()} >
                    <Image  
                        source={require("../assest/back.png")}
                    /> 
                </TouchableOpacity>
                <Text style={styles.headerText} >
                    Playing from Album Nevermind
                </Text>
                <Image  
                    source={require("../assest/more.png")}
                /> 
            </View>
            <View style={styles.bodyPlak} >
                <Image 
                    source={active.image}
                    style={{width:'60%', height:'60%'}}
                    resizeMode="contain"
                />
                <View style={{height:'5%'}} />
                <Text>
                    {active.name}
                </Text>
                <Text>
                    {active.vokalName}
                </Text>
            </View>
            <View style={styles.section} >
                <TouchableOpacity >
                    <Image 
                        source={require("../assest/Repeat.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>back()} >
                    <Image 
                        source={require("../assest/left.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>stopChange()} >
                    <Image 
                        source={ onStop !== false ? require("../assest/stop.png") : require("../assest/pause.png")}
                    />
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>next()} >
                    <Image 
                        source={require("../assest/right.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require("../assest/cross.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContaier} >
                <Image
                    source={require("../assest/bottom.png")}
                    style={{width:'110%', height:'110%', marginLeft:'-5%', marginBottom:'-15%'}}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        paddingHorizontal:'2%',
        backgroundColor:'#FAFAFA'
    },
    header:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'2%',
        alignItems:'center'
    },
    headerText:{
        width: '40%',
        textAlign:'center'
    },
    bodyPlak:{
        flex:5,
        alignItems:'center',
        justifyContent:'center'
    },
    radioPlayer:{
        flex:1,
        backgroundColor:'black'
    },
    section:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end'
    },
    imageContaier:{
        flex:2,
        justifyContent:'flex-end'
      //  backgroundColor:'grey'
    }

});