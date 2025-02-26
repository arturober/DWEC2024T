import { Directive, input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  minDate = input.required<string>();

  validate(control: FormControl): ValidationErrors | null {
    if(control.value && control.value < this.minDate())  {
      return { 'minDate': true }
    }

    return null;
  }
}
