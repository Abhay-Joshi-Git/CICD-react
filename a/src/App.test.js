import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  const header = div.querySelector('h2');
  expect(header).toBeFalsy();
  ReactDOM.unmountComponentAtNode(div);
});
