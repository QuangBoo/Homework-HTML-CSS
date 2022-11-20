import { useState } from "react";
import Drum from "./drum";


function App() {
  const [sounds, setSounds] = useState([
    {
			name: "a",
			sound: require("./sounds/tom-2.mp3"),
			key: "A",
    },
    {
			name: "s",
			sound: require("./sounds/tom-3.mp3"),
			key: "S",
		},
    {
			name: "w",
			sound: require("./sounds/tom-1.mp3"),
			key: "W",
		},
		{
			name: "d",
			sound: require("./sounds/tom-4.mp3"),
			key: "D",
		},
		{
			name: "j",
			sound: require("./sounds/sounds_snare.mp3"),
			key: "J",
		},
		{
			name: "k",
			sound: require("./sounds/sounds_crash.mp3"),
			key: "K",
		},
		{
			name: "l",
			sound: require("./sounds/kick-bass.mp3"),
			key: "L",
		},
    {
      name: "z",
      sound: require("./sounds/mixkit-guitar-string-tone-2326.wav"),
      key: "Z",
    },
    {
      name: "x",
      sound: require("./sounds/mixkit-acute-guitar-single-string-2325.wav"),
      key: "X",
    },
    {
      name: "c",
      sound: require("./sounds/mixkit-short-guitar-strum-2318.wav"),
      key: "C",
    }
	]);

	return (
		<div className="App">
			<h1 id='title'>Drum Kit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
				))}
			</div>
		</div>
	);
}

export default App;