import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

@Directive({
  selector: '[setColor]',
  host: {
    '[style.backgroundColor]': 'bgColor()',
    '[style.color]': 'textColor()',
    '(click)': 'toggleTextColor()'
  }
})
export class SetColorDirective {
  bgColor = input.required<string>({ alias: 'setColor' });
  textColor = signal('black');

  toggleTextColor() {
    this.textColor.update(c => c === 'black' ? 'white' : 'black');
  }
}
