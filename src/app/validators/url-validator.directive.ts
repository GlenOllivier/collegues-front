import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validator {

  constructor() { }

  validate(control:AbstractControl): ValidationErrors | null {

    if (control.value !== null && control.value.substring(0,4) !== "http") {
      return {urlInvalide : true};
    }

    return null;
  }

}
