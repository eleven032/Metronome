'use strict';

function BPMRange({bpmValue}) {

  const bpmInput = {
    id: 'bpm_input',
    track: "inverted",
    defaultValue: 30,
    "aria-labelledby": "discrete-slider-small-steps",
    step: 10,
    min: 60,
    max:240,
    // valueLabelDisplay: "auto"
    // marks,
    // type:"range", 
    // min:"60", 
    // max:"240", 
    // // value: '100',
    // onChange: (event) => {this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'}
  }

  return React.createElement(
    'Slider',
    bpmInput,
  );
}
