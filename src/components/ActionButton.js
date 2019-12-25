import React from 'react';

export default function ActionButton() {
  const [playing, togglePlaying] = React.useState(false);

  return(
    <button 
      className="bpmButton"
      onClick={ () => togglePlaying(!playing)} 
    >
      <text> {playing ? 'Stop': 'Start'} </text>
    </button>
  );
}
