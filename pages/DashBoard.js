import React, {useEffect, useRef, useState} from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import styles from '../css/DashBoard'
import musiclist from '../music/musiclist'
import TrackPlayer from 'react-native-track-player';
import { Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { TextInput } from 'react-native'

export default function DashBoard({setPage, setActive, active, next, stopChange, back, onStop, setOnStop ,playerNew}) {
   
    const fadeAnim = useRef(new Animated.Value(-Dimensions.get("window").height*40/100)).current;
    const [list, setList] = useState([]);

    useEffect(async() => {
        if(active === null){
            await setActive(musiclist[0])
            await playerNew(musiclist[0])   
        }
        await setList(musiclist) 
    }, [])

    const onCheck = (item) =>{
        TrackPlayer.stop();
        setActive(item)
        console.log(item)
        setPage(true)
    }


  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver:false
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: -Dimensions.get("window").height*40/100,
      duration: 1000,
      useNativeDriver:false
    }).start();
  };

  const search = (text) =>{
      console.log("text", text)
    const temp = musiclist.filter(item=>
        (`${item.name.toUpperCase()}+${item.vokalName.toUpperCase()}`).indexOf(text.toUpperCase()) !== -1 
    )
     console.log("list", temp)
     setList(temp)
  }

    return (
        <View style={styles.container} >
            <Animated.View style={{
                position: "absolute",
                zIndex:10,
                width: Dimensions.get("window").width-10,
                height: Dimensions.get("window").height*6/100,
                alignItems:'center',
                justifyContent:"space-between",
                top: fadeAnim,
                flexDirection:'row',
                borderColor:'#B5B5B5',
                borderRadius:30,
                borderWidth:1,
                left: 5,
                backgroundColor:'white',
                paddingHorizontal:'5%'
            }} >
                <TextInput 
                    style={{
                        width:'80%',
                        height:'80%',
                    }} 
                    onChangeText={search}
                    placeholder="Şarkı ara..."
                />
                <TouchableOpacity style={{width:'5%', height:'50%'}} onPress={()=>fadeIn()} >
                    <Image 
                        resizeMode="contain"
                        style={{width:'100%', height:'100%'}}
                        source={require("../assest/cancel.png")}
                    />
                </TouchableOpacity>
            </Animated.View>
            {(active !== null && list.length > 0) &&
                <>
                <View style={styles.headerSlider} >
                    <TouchableOpacity onPress={()=>fadeOut()} style={styles.bottomIcon} >
                        <Image
                            style={{width:'100%', height:'100%'}}
                            source={require("../assest/search.png")}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={styles.title} >
                        Popüler Şarkılar
                    </Text>
                    <View style={styles.sizeContainer} >
                        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            list.map((item, key)=>(
                                <TouchableOpacity 
                                    style={[styles.itemcontainer, styles.itemOneD]}
                                    onPress={()=>onCheck(item)}
                                >
                                    <Image 
                                        source={item.image}
                                        style={styles.circleOne}
                                    />
                                    <View style={[styles.shadow, styles.itemOneZ]} >
                                        <Text style={styles.music} >
                                            {item.name}
                                        </Text>
                                        <Text style={styles.vokal} >
                                            {item.vokalName}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.albumsSlider} >
                    <Text style={styles.title} >
                        Trend Albümler
                    </Text>
                    <View style={styles.sizeContainer} >
                        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            list.map((item, key)=>(
                                <TouchableOpacity 
                                    style={[styles.itemcontainer, styles.itemTwoD]} 
                                    onPress={()=>onCheck(item) }
                                >
                                    <Image 
                                        style={styles.circleTwo}
                                        source={item.image}
                                    />
                                    <View style={[styles.shadow, styles.itemTwoZ]} >
                                        <Text style={styles.music} >
                                            {item.name}
                                        </Text>
                                        <Text style={styles.vokal} >
                                            {item.vokalName}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.player} >
                    <View
                        style={styles.playerBanner}
                    >
                        <Image 
                            source={active.image}
                            style={styles.minialbum}
                        />
                        <View style={styles.albumText} >
                            <Text style={styles.music} >
                                {active.name}
                            </Text>
                            <Text style={styles.vokal} >
                                {active.vokalName}
                            </Text>
                        </View>
                        <View style={styles.albumIcons} >
                            <TouchableOpacity onPress={()=>back()} >
                                <Image
                                    source={require("../assest/backIconDash.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>stopChange()} >
                                <Image
                                    source={ onStop !== false ? require("../assest/blackStop.png") : require("../assest/stop2.png")}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>next()} >
                                <Image
                                    source={require("../assest/nextNext.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </>
            }
        </View>
    )
}