import React from 'react';
import { create } from 'react-test-renderer';
import BPMSlider from '../components/BPMSlider';

describe('BPMSlider Test', () => {
  test('should be a Slider tag', () => {
    const component = create(<BPMSlider />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
