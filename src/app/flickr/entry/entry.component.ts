import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { TagSelectionService } from "app/shared/services/tag-selection.service";

@Component({
    selector: "entry",
    templateUrl: "./entry.component.html",
    styleUrls: ["./entry.component.css"]
})
export class EntryComponent implements OnInit {

    @Input() entry: any;

    loadingImage = false;

    constructor(private tagSelectionService: TagSelectionService) { }

    ngOnInit(): void {
        console.log("ON INIT")
        this.loadingImage = true;
    }

    imageLoaded() {
        console.log("CALLED")
        this.loadingImage = false;
    }

    handleTagClicked(tag) {
        this.tagSelectionService.publish(tag);
    }
}
