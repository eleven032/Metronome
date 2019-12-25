import React from 'react';
import PropTypes from 'prop-types';

export default function BPMValue({ value }) {
  return (
    <h2 className="bpmValue">
      {`${value || 80} BPM`}
    </h2>
  );
}

BPMValue.propTypes = {
  value: PropTypes.number.isRequired,
};
