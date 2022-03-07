import React from 'react'

export default function LibrarySong({song,setCurrentSong,setIsPlaying,audioRef,isActive,setIsActive,currentSong}) {
    
    const songSelectHandler=()=>{
       // setIsPlaying(false);
        setCurrentSong(song);
        const playPromise= audioRef.current.play();
        if (playPromise!==undefined){
            playPromise.then(()=>{audioRef.current.play();
                                       setIsPlaying(true);
                                                       })
        }
        }
        
    return (
    <div  onClick={songSelectHandler} className={song.id===currentSong.id?'library-song selected':'library-song'}>
        <img src={song.cover} alt={song.name}/>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>

    </div>
    
  )
}