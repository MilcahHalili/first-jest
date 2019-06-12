import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

describe('my first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})

describe('changing button name to Hide', () =>{
  test('toggle the button', () => {
    const tree = create(<App />);
    const instance = tree.getInstance();
    expect(instance.state.isActive).toBe(false)
    // changing the state
    instance.handleClick();
    // isActive property is updated to true
    expect(instance.state.isActive).toBe(true);
    expect(tree.toJSON()).toMatchSnapshot()
  })
})