'use strict';

 function ActionButton() {
  const [playing, togglePlaying] = React.useState(false);

  return React.createElement(
    'button',
    { id: 'bpm_button', onClick: () => togglePlaying(!playing) },
    playing ? 'Stop': 'Start'
  );
}
