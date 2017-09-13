import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "tag-box",
    templateUrl: "./tag-box.component.html",
    styleUrls: ["./tag-box.component.css"]
})
export class TagBoxComponent {

    @Input() tags: Array<any>;
    @Output() onTagClicked = new EventEmitter();
    
    tagClicked(tag) {
        this.onTagClicked.emit(tag);
    }
}