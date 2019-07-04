import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, Validator } from "@angular/forms";

@Injectable()
export class ReverseJsonFormService {

  constructor(private _fb: FormBuilder) { }

  getForm():FormGroup {
    return this._fb.group({
      jpaths: this._fb.array([])
    })
  }
}
