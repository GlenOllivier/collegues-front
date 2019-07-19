import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator {

  constructor(private dataService :DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors>|null {
    
    return this.dataService.verifierEmail(control.value)
    .pipe(map((alreadyUsed:boolean) => {
      return alreadyUsed?{emailUtilise:true}:null;
    }));
  }
}
