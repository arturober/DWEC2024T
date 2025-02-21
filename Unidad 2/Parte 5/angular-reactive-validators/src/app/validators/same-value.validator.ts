import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sameValue(otherControl: FormControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === otherControl.value ? null : { 'sameValue' : true };
  }
}
