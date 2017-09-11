import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringToArrayPipe } from "app/shared/pipes/string-to-array.pipe";
import { AuthorPipe } from "app/shared/pipes/author.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StringToArrayPipe, AuthorPipe],
  exports: [StringToArrayPipe, AuthorPipe],
  providers: []
})
export class PipeModule { }
