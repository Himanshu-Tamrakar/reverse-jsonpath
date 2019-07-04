import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { FormBuilder } from "@angular/forms";
import { ReverseJsonFormService } from '../../core/services/reverse-json-form.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})

export class WebComponent extends HomeComponent implements OnInit {

  constructor(public _fb: FormBuilder, public _rjfs: ReverseJsonFormService) {
    super(_fb, _rjfs);
  }

  ngOnInit() {

  }

  onSubmit() {
    this.test();
  }
}
