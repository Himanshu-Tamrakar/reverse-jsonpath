import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReverseJsonpathRoutingModule } from './reverse-jsonpath-routing.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HomeComponent } from './home/home.component';
import { ReverseJsonFormService } from './core/services/reverse-json-form.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReverseJsonpathRoutingModule,
    ReactiveFormsModule,
    NgxJsonViewerModule
  ],
  providers: [ReverseJsonFormService]
})
export class ReverseJsonpathModule { }
