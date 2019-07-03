import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, Validator } from "@angular/forms";
import { ReverseJsonFormService } from '../core/services/reverse-json-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public homeForm: FormGroup;

  constructor(private _fb: FormBuilder, private _rjfs: ReverseJsonFormService) {
    this.homeForm = this._rjfs.getForm();
  }

  add(): void {
    let controls = <FormArray>this.homeForm['controls']['jpaths'];
    controls.push(this._fb.group({
      path: ['', [Validators.required]],
      value: ['', [Validators.required]]
    }))
  }

  remove(i: number): void {
    let controls = <FormArray>this.homeForm['controls']['jpaths'];
    controls.removeAt(i);
  }

  onSubmit() {
    alert()
  }

  // get code() {
  //   return JSON.stringify(this.data, null, 2);
  // }

}
