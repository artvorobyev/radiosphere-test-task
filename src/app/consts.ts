import { Button, ButtonType } from './interfaces';

export const BUTTONS_DONE: Button[] = [
  { value: '+', type: ButtonType.actionSumm },
  { value: 'x', type: ButtonType.actionMultiply },
  { value: 'back', type: ButtonType.actionBack },
];

export const BUTTONS: Button[] = [
  {
    value: 7,
    type: ButtonType.number,
  },
  {
    value: 8,
    type: ButtonType.number,
  },
  {
    value: 9,
    type: ButtonType.number,
  },
  {
    value: 4,
    type: ButtonType.number,
  },
  {
    value: 5,
    type: ButtonType.number,
  },
  {
    value: 6,
    type: ButtonType.number,
  },
  {
    value: 1,
    type: ButtonType.number,
  },
  {
    value: 2,
    type: ButtonType.number,
  },
  {
    value: 3,
    type: ButtonType.number,
  },
  {
    value: 'del',
    type: ButtonType.actionDelete,
  },
  {
    value: 0,
    type: ButtonType.number,
  },
  {
    value: 'next',
    type: ButtonType.actionNext,
  },
  {
    value: 'done',
    type: ButtonType.actionDone,
  },
];
