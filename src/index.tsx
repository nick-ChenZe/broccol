import { h, render } from 'preact';
import Provider from './components/provider';
import App from './components/trigger-button';
import { observable, action, autorun } from 'mobx';
import { repository as REPOSITORY } from './store/index';

const anchorNode = document.querySelector('#broccol');
const props = { REPOSITORY };

render(
  <Provider {...props}>
    <App />
  </Provider>,
  anchorNode
);
