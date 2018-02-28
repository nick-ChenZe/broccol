/// <reference path="./react.d.ts" />

import { h, render } from 'preact';
import Provider from './components/provider';
import TriggerButton from './components/trigger-button';
import { observable, action, autorun } from 'mobx';

const anchorNode = document.querySelector('#broccol');
const repo = 'broccol';
const owner = 'nick-ChenZe';
const path = '/src';
const host = 'https://api.github.com/repos';
const FETCH_DIR_PATH = `${host}/${owner}/${repo}/contents/%s`;
const FETCH_REPO_PATH = `${host}/${owner}/${repo}/contents${path}`;
const FETCH_BLOB_PATH = `${host}/${owner}/${repo}/git/blobs/%s`;

const user = observable({
  count: 0,
  increase: action.bound(function(val) {
    console.log(this);
    this.count++;
  }) 
});


render(
  <Provider store={user}>
    <TriggerButton
      repo_path={FETCH_REPO_PATH}
      dir_path={FETCH_DIR_PATH}
      blob_path={FETCH_BLOB_PATH}
    />
  </Provider>,
  anchorNode
);
