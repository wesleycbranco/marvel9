import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';


const components =  [
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components
  ],
  exports: [
    ...components
  ]
})
export class MaterialModule { }
