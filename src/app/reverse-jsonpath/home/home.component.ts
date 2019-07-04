import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { ReverseJsonFormService } from '../core/services/reverse-json-form.service';

@Component({
  template: `
  <div *ngIf="!isMobile; else mobile">
    <app-web></app-web>
  </div>

  <ng-template #mobile>
    <app-mobile></app-mobile>
  </ng-template>
  `
})

export class HomeComponent {
  public isMobile:boolean = detectMob();
  public homeForm: FormGroup;

  public constructor(public _fb: FormBuilder, public _rjfs: ReverseJsonFormService) {
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

  test() {
    console.log(this.homeForm.value);
  }

}

/*
To detect Mobile device or Computer device
 */
function detectMob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}
