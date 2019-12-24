'use strict';

// import BPMRange from './components/BPMRange';
// import BPMValue from './components/BPMValue';
// import ActionButton from './components/ActionButton';

const domContainer = document.body;

ReactDOM.render(
  React.createElement(
    'div', 
    {id: 'metronome_container'},
    React.createElement(BPMValue),
    React.createElement(BPMRange),
    React.createElement(ActionButton),
  ), domContainer);
  