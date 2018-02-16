import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

test('Navbar renders correnctly', () => {
  const component = renderer.create(<Navbar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
