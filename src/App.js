import React from 'react';
import './App.css';
import BPMValue from './components/BPMValue';
import BPMSlider from './components/BPMSlider';
import ActionButton from './components/ActionButton';

export default function App() {
  return (
    <div className="App">
      <BPMValue />
      <BPMSlider />
      <ActionButton />
    </div>
  );
}
