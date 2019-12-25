import React from 'react';
import { create } from 'react-test-renderer';
import BPMValue from '../components/BPMValue';

describe('BPMValue Test', () => {
  test('should be a h2 tag', () => {
    const component = create(<BPMValue value={80} />);
    const instance = component.root;
    const h2 = instance.findByType('h2');
    expect(h2.props.children).toBe('80 BPM');
  });
});
