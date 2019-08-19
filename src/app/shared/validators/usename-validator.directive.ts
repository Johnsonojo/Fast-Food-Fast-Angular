import { AbstractControl } from '@angular/forms';

export const usernameValidator = (
  control: AbstractControl,
): { [key: string]: any } | null => {
  const valid = /^[A-Za-z]+$/.test(control.value);
  return valid
    ? null
    : { invalidUsername: { valid: false, value: control.value } };
};
