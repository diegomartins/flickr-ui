import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule, HttpModule } from '@angular/http';
import { FlickrApiService } from "app/shared/api/flickr-api.service";

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    FlickrApiService
  ]
})
export class ApiModule { }
