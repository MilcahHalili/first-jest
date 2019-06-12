import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

describe('my first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})