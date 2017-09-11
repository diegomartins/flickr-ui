import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingRequestsService } from "app/shared/services/pending-requests.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PendingRequestsService
  ]
})
export class ServicesModule { }
