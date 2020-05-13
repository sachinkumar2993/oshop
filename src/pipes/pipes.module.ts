import { NgModule }  from '@angular/core';
 import { SortPipe } from '../pipes/pipes';

 @NgModule({
     imports:        [],
     declarations:   [SortPipe],
     exports:        [SortPipe],
 })

 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 } 