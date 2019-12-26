import React from 'react';
import PropTypes from 'prop-types';

export default function BPMValue({ value }) {
  return (
    <h2 className="bpmValue">
      {`${value} BPM`}
    </h2>
  );
}

BPMValue.propTypes = {
  value: PropTypes.number.isRequired,
};
