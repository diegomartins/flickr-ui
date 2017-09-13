import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingRequestsService } from "app/shared/services/pending-requests.service";
import { TagSelectionService } from "app/shared/services/tag-selection.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PendingRequestsService,
    TagSelectionService
  ]
})
export class ServicesModule { }
