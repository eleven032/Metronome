import React from 'react';
// eslint-disable-next-line import/extensions
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

export default function BPMSlider({ value, setBPM }) {
  return (
    <Slider
      track="normal"
      defaultValue={value}
      aria-labelledby="discrete-slider-small-steps"
      step={5}
      min={60}
      max={240}
      onChange={(_, sliderValue) => { setBPM(sliderValue); }}
    />
  );
}

BPMSlider.propTypes = {
  value: PropTypes.number.isRequired,
  setBPM: PropTypes.func.isRequired,
};
