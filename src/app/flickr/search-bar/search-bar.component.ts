import { Component, EventEmitter, Output, AfterViewInit } from "@angular/core";
import { FlickrApiService } from "app/shared/api/flickr-api.service";
import { Subject } from "rxjs/Rx";
import { TagSelectionService } from "app/shared/services/tag-selection.service";

@Component({
    selector: "search-bar",
    templateUrl: "./search-bar.component.html",
    styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements AfterViewInit {

    @Output() onSearchResult = new EventEmitter<any>();

    searchTerm: string;

    private searchTermStream = new Subject<any>();

    constructor(private flickrApiService: FlickrApiService, private tagSelectionService: TagSelectionService) { }

    ngAfterViewInit(): void {

        this.subscribeToTagSelection();
        this.subscribeToSearchTermChanges();
        this.search("");
    }

    searchChanged(query) {
        this.searchTermStream.next(query);
    }


    private subscribeToTagSelection() {

        this.tagSelectionService.subscribe(data => {

            if (data) {
                this.searchTerm = data;
                this.search(this.searchTerm);
            }
        });
    }

    private subscribeToSearchTermChanges() {

         this.searchTermStream.debounceTime(300).distinctUntilChanged().subscribe(term => {
            this.search(term);
        });
    }

    private search(query) {

        const tags = query.split(" ").join(",");

        this.flickrApiService.searchPictures(tags).subscribe(data => {
            this.onSearchResult.emit(data.items);
        }, error => {
            console.error(error);
            //TODO: Handle error correctly (toaster notification, perhaps)
        });
    }
}