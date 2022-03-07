 import "./styles/app.scss"
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Nav from './components/Nav'
import { useState,useRef } from "react";
import Library from "./components/Library";

function App() {
  const [songs, setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);
  const [libraryStatus,setLibraryStatus]=useState(true);
  const audioRef=useRef(null);

  // console.log(songs[0]);
  //console.log(currentSong);
  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
     <Library songs={songs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} audioRef={audioRef} currentSong={currentSong} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
     <Song currentSong={currentSong}/>
     <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
