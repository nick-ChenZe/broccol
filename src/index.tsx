/// <reference path="./react.d.ts" />

import { render, h } from 'preact';
import TriggerButton from './components/trigger-button';

const anchorNode = document.querySelector('#broccol');
render(<TriggerButton />, anchorNode);
