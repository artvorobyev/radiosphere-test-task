import { Component } from '@angular/core';
import { Button, ButtonType } from './interfaces';
import { BUTTONS, BUTTONS_DONE } from './consts';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '0';
  view = 'calculator' as 'calculator' | 'doneMenu';
  private stack: number[] = [];

  buttons = BUTTONS;
  buttonsDone = BUTTONS_DONE;

  handleClick(button: Button): void {
    if (button.type === ButtonType.number) {
      this.value = `${this.value === '0' ? '' : this.value}${button.value}`;
      return;
    }

    if (button.type === ButtonType.actionNext) {
      this.handleNext();
      return;
    }

    if (button.type === ButtonType.actionDelete) {
      const newValue = this.value.substring(0, this.value.length - 1);
      this.value = newValue.length > 0 ? newValue : '0';
      return;
    }

    if (button.type === ButtonType.actionDone) {
      this.handleNext();
      this.view = 'doneMenu';
      return;
    }

    if (button.type === ButtonType.actionBack) {
      this.view = 'calculator';
      return;
    }

    if (button.type === ButtonType.actionSumm) {
      const newValue = this.stack.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      console.log('newValue', newValue);
      this.stack = [];
      this.value = `${newValue}`;
      this.view = 'calculator';
      return;
    }

    if (button.type === ButtonType.actionMultiply) {
      const newValue = this.stack.reduce((acc, curr) => {
        return acc * curr;
      }, 1);
      console.log('newValue', newValue);
      this.stack = [];
      this.value = `${newValue}`;
      this.view = 'calculator';
      return;
    }
  }

  handleNext(): void {
    this.stack.push(Number(this.value));
    console.log(this.stack);
    this.value = '0';
  }
}
