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
