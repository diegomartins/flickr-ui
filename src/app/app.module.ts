import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiModule } from "app/shared/api/api.module";
import { SearchBarComponent, FlickrPanelComponent, ResultSetComponent, EntryComponent, TagBoxComponent } from "app/flickr";
import { PipeModule, TaglibModule } from "app/shared";


@NgModule({
  declarations: [
    AppComponent,
    FlickrPanelComponent,
    SearchBarComponent,
    ResultSetComponent,
    EntryComponent,
    TagBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApiModule,
    PipeModule,
    TaglibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
