
  import React, { useState } from 'react';
  import {
    SafeAreaView,
    StyleSheet,
  } from 'react-native';
  import musiclist from './music/musiclist';
  import DashBoard from './pages/DashBoard';
  import Music from "./pages/musicPlayer";
  import TrackPlayer from 'react-native-track-player';
  
  const App = () => {
  
    const [active, setActive] = useState(null);
    const [page, setPage] = useState(false);
    const [onStop, setOnStop] = useState(false);
  
    const backgroundStyle = {
      flex:1
    };
  
    const next =  async() =>{
        if(musiclist.indexOf(active) !== musiclist.length-1){
          playerNew(musiclist[musiclist.indexOf(active)+1])
        }
    }
  
    const playerNew =  async(item) =>{
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        await TrackPlayer.setupPlayer();
        await setActive(item)
        await addPlayer2(item)
        await TrackPlayer.play();
        setOnStop(true)
  }
  
    const stopChange = () =>{
        if(onStop !== false){
            TrackPlayer.pause();
        }else{
           TrackPlayer.play();
        }
        setOnStop(!onStop);
    }
  
    const back = async() =>{
      if(musiclist.indexOf(active) !== 0){
        playerNew(musiclist[musiclist.indexOf(active)-1])
      }
    }

    const addPlayer2 = async(active) =>{
      await TrackPlayer.add({
          id: active.id,
          url: active.music,
          title: 'Track Title',
          artist: 'Track Artist',
          artwork: active.image,
          duration:200
      });
    }
  
    return (
      <SafeAreaView style={backgroundStyle}>
        {page === false ? (
          <DashBoard 
            setPage={setPage} 
            setActive={setActive} 
            active={active} 
            next={next}
            stopChange={stopChange}
            back={back}
            onStop={onStop}
            setOnStop={setOnStop}
            playerNew={playerNew}
            />
        ) : (
          <Music 
          setPage={setPage} 
          setActive={setActive} 
          active={active} 
          next={next}
          stopChange={stopChange}
          back={back}
          onStop={onStop}
          setOnStop={setOnStop}
          playerNew={playerNew}
            />
        )}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
  
  });
  
  export default App;
  