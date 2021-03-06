import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayName, selectProduct, selectExternalUrL} from './spotifyExampleSlice';
import styles from './SpotifyExample.module.css';
import Love from './Text'
import { getHashParams, removeHashParamsFromUrl } from '../../utils/hashUtils';
import { setUserProfileAsync } from '../spotifyExample/spotifyExampleSlice';
import axios from 'axios';



export function SpotifyExample() {

  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);
  const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [artist, setArtist] = useState('');
	const [hobby, setHobby] = useState('');
	const [spotify, setSpotify] = useState('');
 
  return (
    <div className={styles.column}>
      <Love/>
      {displayName && <div className={styles.row}>
        <span>
        Welcome!! 🎶♥️ {displayName}  
          </span> 
      </div>}
      {product && <div className={styles.row}>
        
        <br/>
        <hr/>
        <div className={styles.row}>
          <button
          className={styles.button}
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open("https://open.spotify.com/user/" + displayName)}  >
          Go to my Spotify
          </button>
          <hr />
          <br />
          </div>
          <div className={styles.row}>
          <button
          className={styles.button}
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open("https://compassionate-data.netlify.app/")}  >
          Match Me
          </button>
          <hr />
          <br />
          <button
          className={styles.button}
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open("https://6043bc129a805097e7d21acf--objective-bardeen-5534ad.netlify.app")}  >
          Prototype
          </button>  
          </div>
      </div>
      }
    </div>
  );
}
