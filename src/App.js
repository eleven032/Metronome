import React from 'react';
import './App.css';
import BPMValue from './components/BPMValue';
import BPMSlider from './components/BPMSlider';
import ActionButton from './components/ActionButton';

export default function App() {
  // futere: this value should be from local storage or a default value
  const [bpm, setBPM] = React.useState(80);
  return (
    <div className="App">
      <BPMValue value={bpm} />
      <BPMSlider value={bpm} setBPM={setBPM} />
      <ActionButton value={bpm} />
    </div>
  );
}
