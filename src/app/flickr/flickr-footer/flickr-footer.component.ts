import { Component, EventEmitter, Output, AfterViewInit } from "@angular/core";
import { FlickrApiService } from "app/shared/api/flickr-api.service";
import { Subject } from "rxjs/Rx";
import { TagSelectionService } from "app/shared/services/tag-selection.service";

@Component({
    selector: "flickr-footer",
    templateUrl: "./flickr-footer.component.html",
    styleUrls: ["./flickr-footer.component.css"]
})
export class FlickrFooterComponent {

   
}