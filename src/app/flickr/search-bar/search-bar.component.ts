import { Component, EventEmitter, Output, AfterViewInit } from "@angular/core";
import { FlickrApiService } from "app/shared/api/flickr-api.service";
import { Subject } from "rxjs/Rx";

@Component({
    selector: "search-bar",
    templateUrl: "./search-bar.component.html"
})
export class SearchBarComponent implements AfterViewInit {

    @Output() onSearchResult = new EventEmitter<any>();

    searchTerm: string;

    private searchTermStream = new Subject<any>();

    constructor(private flickrApiService: FlickrApiService) {}

    ngAfterViewInit(): void {

        this.searchTermStream.debounceTime(300).distinctUntilChanged().subscribe(term => {
            this.search(term);
        });
    }

    searchChanged(query) {
        this.searchTermStream.next(query);
    }


    private search(query) {

        this.flickrApiService.searchPictures(query).subscribe(data => {
            this.onSearchResult.emit(data.items);
        }, error => {
            console.error("Error");
            //TODO: Handle error correctly
        });
    }
}