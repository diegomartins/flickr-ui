import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { PendingRequestsService } from "app/shared/services/pending-requests.service";



@Component({
    selector: "loading-component",
    templateUrl: "loading.component.html",
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent {

    private subscription: Subscription;
    public hideLoading: boolean;

    constructor(private pendingRequestsService: PendingRequestsService) {
        this.hideLoading = false;
    }

    ngOnInit() {
        this.subscribeToLoadingService();
    }

    private subscribeToLoadingService() {

      this.subscription = this.pendingRequestsService.subscribe((pendingRequests) => {

          if(pendingRequests <= 0) {
            this.hideLoading = true;
          } else {
            this.hideLoading = false;
          }
        }
      );
    }

}
