import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function minDateValidator(minDate: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value && minDate && minDate > c.value) {
      return { minDate: true };
    }
    return null;
  };
}
