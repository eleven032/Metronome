import React from 'react';
import { create, act } from 'react-test-renderer';
import ActionButton from '../components/ActionButton';

describe('ActionButton Test', () => {
  test('should be a button tag', () => {
    const bpm = 90;
    const component = create(<ActionButton value={bpm} />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.props.children).toBe('Start');
    act(() => button.props.onClick());
    expect(button.props.children).toBe('Stop');
  });
});
