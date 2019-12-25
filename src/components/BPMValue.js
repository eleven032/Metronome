import React from 'react';

export default function BPMValue({value}) {
  return (
    <h2 className="bpmValue">
      {value || 80} BPM
    </h2>
  );
}
