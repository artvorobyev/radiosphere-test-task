export interface Button {
  value: string | number;
  type: ButtonType;
}

export enum ButtonType {
  number = 'number',
  actionDelete = 'actionDelete',
  actionNext = 'actionNext',
  actionDone = 'actionDone',
  actionBack = 'actionBack',
  actionSumm = 'actionSumm',
  actionMultiply = 'actionMultiply',
}
