import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons'
export default function Player({currentSong,isPlaying,setIsPlaying,audioRef,songs,setCurrentSong}) {
  
   const playSongHandler=()=>{
   if(!isPlaying){
     audioRef.current.play();
     setIsPlaying(true);
   }else{
     audioRef.current.pause();
     setIsPlaying(false);
   }    
  }////
  const getTime=(time)=>{
    return (
      Math.floor(time/60) + ":" +("0" + Math.floor(time%60)).slice(-2)
    )
  }
  const timeUpdateHandler=(e)=>{
    // console.log(e.target)
    const current=e.target.currentTime;
    const duration=e.target.duration;////////!!!!
    setSongInfo({...songInfo,currentTime:current,duration});
    if(duration==current){
      skipTrackHandler("forward");
    }
     }
  const onLoadHandler=(e)=>{
    setSongInfo({...songInfo,duration:e.target.duration})
  }
  const onInputChange=(e)=>{
    audioRef.current.currentTime=e.target.value;
  }
  const skipTrackHandler= async (direction)=>{
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    if(direction==="forward"){
     await setCurrentSong(songs[(currentIndex+1)%songs.length])}
    else{
        if((currentIndex-1)===-1){
        await  setCurrentSong(songs[(songs.length)-1]);
          return;
        }
         await  setCurrentSong(songs[(currentIndex-1)%songs.length]);
       }
      setIsPlaying(true); ///for pause button to toggle
      audioRef.current.play(); 
        }   
     

  
  //////////////
//const duration=audioRef.current.duration();
  const [songInfo,setSongInfo]=useState({
    currentTime:0,
    duration:0,
  });
 //console.log(audioRef.current.duration)
  return (
    <div className='player'>
        <div className='time-control'>
            <p>{getTime(songInfo.currentTime)}</p>
            <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={onInputChange} type="range" />
            <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>skipTrackHandler("backward")} className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={ isPlaying? faPause:faPlay}/>
                <FontAwesomeIcon onClick={()=>skipTrackHandler("forward")} className='skip-forward' size='2x' icon={faAngleRight}/>  
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={onLoadHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}
