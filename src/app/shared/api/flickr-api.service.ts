import { Injectable } from "@angular/core";
import { Jsonp, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { PendingRequestsService } from "app/shared";

@Injectable()
export class FlickrApiService {

    readonly API_ROOT = "https://api.flickr.com/services/feeds";
    readonly DEFAULT_SUFFIX = "format=json&jsoncallback=JSONP_CALLBACK";
    
    constructor(private jsonp: Jsonp, private pendingRequestsService: PendingRequestsService) {}

    public searchPictures(query) {
        
        //TODO: Create builder for those parameters.
        //TODO: Find a more generic way to handle the pending requests (find interceptor impl for jsonp requests)
        
        this.pendingRequestsService.increase();
        
        return this.jsonp.get(`${this.API_ROOT}/photos_public.gne?tags=${query}&${this.DEFAULT_SUFFIX}`)
                         .finally(() => this.pendingRequestsService.decrease())
                         .map((response: Response) => { return response.json() });

    }

}