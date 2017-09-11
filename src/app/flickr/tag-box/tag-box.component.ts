import { Component, Input } from "@angular/core";

@Component({
    selector: "tag-box",
    templateUrl: "./tag-box.component.html",
    styleUrls: ["./tag-box.component.css"]
})
export class TagBoxComponent {

    @Input() tags: Array<any>;

}