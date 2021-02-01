import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayName, selectProduct, selectExternalUrL} from './spotifyExampleSlice';
import styles from './SpotifyExample.module.css';
import Love from './Text'
import { getHashParams, removeHashParamsFromUrl } from '../../utils/hashUtils';
import { setUserProfileAsync } from '../spotifyExample/spotifyExampleSlice';



export function SpotifyExample() {
  const displayName = useSelector(selectDisplayName);
  const product = useSelector(selectProduct);
  


  console.log(displayName)
  return (
    <div className={styles.column}>
      <Love/>
      {displayName && <div className={styles.row}>
        Welcome!! 🎶♥️ {displayName}
      </div>}
      {product && <div className={styles.row}>
        
        <br/>
        <hr/>
        <div className={styles.row}>
          <button
          className={styles.button}
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open("https://open.spotify.com/user/nico.zahniser")}  >
          Connect my playlist
          </button>
          </div>
          <div className={styles.row}>
          Then hold for your Match!
          </div>
      </div>
      }
    </div>
  );
}
