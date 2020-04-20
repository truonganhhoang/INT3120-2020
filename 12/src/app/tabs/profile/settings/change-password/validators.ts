import { FormGroup, ValidatorFn } from '@angular/forms';

export const mustEquals = (targetField: string, toMatchField: string, message: string): ValidatorFn => {
  return (formGroup: FormGroup): { [key: string]: any } | null => {
    if (formGroup.get(targetField).value !== formGroup.get(toMatchField).value) {
      formGroup.get(toMatchField).setErrors({ mismatch: message });
    }
    return null;
  };
};

export const mustNotEquals = (targetField: string, notToMatchField: string, message: string): ValidatorFn => {
  return (formGroup: FormGroup): { [key: string]: any } | null => {
    if (formGroup.get(targetField).value === formGroup.get(notToMatchField).value) {
      formGroup.get(notToMatchField).setErrors({ duplicate: message });
    }
    return null;
  };
};
