'use strict';

function BPMValue({value}) {
  return React.createElement(
    'h2',
    {id: 'bpm_value'},
    `${value || 80} BPM`
  );
}
