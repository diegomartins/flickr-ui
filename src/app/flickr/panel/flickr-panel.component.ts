import { Component } from "@angular/core";


@Component({
    selector: "flickr-panel",
    templateUrl: "./flickr-panel.component.html"
})
export class FlickrPanelComponent {

    public results: Array<any>;

    updateResults(results) {
        this.results = results;
    }
}