import React from 'react';

export default function ActionButton() {
  const [playing, togglePlaying] = React.useState(false);

  return (
    <button
      type="submit"
      className="bpmButton"
      onClick={() => togglePlaying(!playing)}
    >
      {playing ? 'Stop' : 'Start'}
    </button>
  );
}
