import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReverseJsonpathRoutingModule } from './reverse-jsonpath-routing.module';
import { HomeComponent } from './home/home.component';
import { ReverseJsonFormService } from './core/services/reverse-json-form.service';
import { MobileComponent } from './home/mobile/mobile.component';
import { WebComponent } from './home/web/web.component';

@NgModule({
  declarations: [HomeComponent, MobileComponent, WebComponent],
  imports: [
    CommonModule,
    ReverseJsonpathRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReverseJsonFormService]
})
export class ReverseJsonpathModule { }
