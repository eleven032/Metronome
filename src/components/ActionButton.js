import React from 'react';
import PropTypes from 'prop-types';
import click1 from '../audios/click1.wav';

let timer;
export default function ActionButton({ value }) {
  const [playing, togglePlaying] = React.useState(false);
  const sound1 = new Audio(click1);

  const playClick = () => {
    sound1.play();
  };

  const startStop = () => {
    if (playing) {
      clearInterval(timer);
    } else {
      timer = setInterval(playClick, (60 / value) * 1000);
    }
    togglePlaying(!playing);
  };

  return (
    <button
      type="submit"
      className="bpmButton"
      onClick={() => startStop()}
    >
      {playing ? 'Stop' : 'Start'}
    </button>
  );
}

ActionButton.propTypes = {
  value: PropTypes.number.isRequired,
};
