import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function regexValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error = !regex.test(control.value);
    return error ? { error: { value: control.value } } : null;
  };
}
