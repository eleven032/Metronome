import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from '../components/ActionButton';

describe('<ActionButton />', () => {
  it('render correctly', () => {
    const value = 90;
    const tree = renderer
      .create(
        <ActionButton
          value={value}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
