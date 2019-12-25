import React from 'react';
import Slider from '@material-ui/core/Slider';

const defaultBPM = 80;

export default function BPMSlider() {
  return (
    <Slider
      track="normal"
      defaultValue={defaultBPM}
      aria-labelledby="discrete-slider-small-steps"
      step={5}
      min={60}
      max={240}
    />
  );
}
