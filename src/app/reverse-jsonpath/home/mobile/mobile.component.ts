import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { FormBuilder } from "@angular/forms";
import { ReverseJsonFormService } from '../../core/services/reverse-json-form.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent  extends HomeComponent implements OnInit {

  constructor(public _fb: FormBuilder, public _rjfs: ReverseJsonFormService) {
    super(_fb, _rjfs);
  }

  ngOnInit() {
  }

}
