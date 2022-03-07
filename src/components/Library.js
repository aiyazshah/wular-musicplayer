import {React,useState} from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs,setCurrentSong,setIsPlaying,audioRef,currentSong,libraryStatus}) {
    return (
    <div className={`Library ${libraryStatus?"":'hide-library'}`}>
    <h1>Library</h1>
     <div className="library-songs">
        {songs.map(song=><LibrarySong song={song} setCurrentSong={setCurrentSong} key={song.id} setIsPlaying={setIsPlaying} audioRef={audioRef} currentSong={currentSong}/>)}     
    </div>   
 
        
    </div>
  )
}
 