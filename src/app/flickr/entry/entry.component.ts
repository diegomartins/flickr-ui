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
        this.loadingImage = true;
    }

    imageLoaded() {
        this.loadingImage = false;
    }

    handleTagClicked(tag) {
        this.tagSelectionService.publish(tag);
    }
}
