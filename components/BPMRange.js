'use strict';

function BPMRange({bpmValue}) {

  const bpmInput = {
    id: 'bpm_input', 
    type:"range", 
    min:"60", 
    max:"240", 
    value: bpmValue,
    // onChange: () => 
  }

  return React.createElement(
    'input',
    bpmInput,
  );
}

document.getElementById("bpm_input").oninput = function() {
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};
