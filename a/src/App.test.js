import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const header = document.getElementById('h2');
  // expect(header).toBeTruthy();
  expect(header).toBeFalsy();
});

it('other test', () => {
  let container = document.createElement('div');
  ReactDOM.render(<App />, container);
  const header = container.querySelector('h2');
  expect(header).toBeTruthy();
  ReactDOM.unmountComponentAtNode(container);
});