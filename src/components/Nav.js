import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Nav({libraryStatus,setLibraryStatus}) {
    const buttonHandler=()=>{
        setLibraryStatus(!libraryStatus);
    }
  return (
    <div className='nav'>
        <h1>Wular</h1>
        <button onClick={buttonHandler}>Library <FontAwesomeIcon icon={faMusic}/></button>
    </div>
  )
}
