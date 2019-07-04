import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
import { FormBuilder } from "@angular/forms";
import { ReverseJsonFormService } from '../../core/services/reverse-json-form.service';
import * as _ from "lodash";
import { CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})

export class WebComponent extends HomeComponent implements OnInit {
  // @ViewChild('jps') jps: ElementRef;
  @ViewChild('jps', {static: false}) jsp: ElementRef;
  @ViewChild('jpv', {static: false}) jpv: ElementRef;
  public finalObject:object={};

  constructor(public _fb: FormBuilder, public _rjfs: ReverseJsonFormService, private _cs:CommonService) {
    super(_fb, _rjfs);
  }

  ngOnInit() {

  }

  onTabClick(fr:string, value:string) {
    console.log(fr, value);
  }

  insertValue() {
    const path = this._cs.convertAJsonPathString(this.jsp.nativeElement.value) ;
    const value = this.jpv.nativeElement.value;

    try {
      _.set(this.finalObject, path , value);
    } catch(err) {
      console.log('jsonpath is wrong!')
    }

    this.jsp.nativeElement.value="";
    this.jpv.nativeElement.value="";

    if(path && value) this.add(path, value);
  }

  onSubmit() {
    this.test();
  }
}
