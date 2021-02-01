import React from 'react';
import logos from './logos.svg';
import Emo from './emo.png'
import { Counter } from './features/counter/Counter';
import { Authorization } from './features/authorization/Authorization';
import { SpotifyExample } from './features/spotifyExample/SpotifyExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Emo} className="App-logo" alt="logo" />
        <Authorization />
        <SpotifyExample />
      </header>
    </div>
  );
}

export default App;
