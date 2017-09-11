import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";



@Injectable()
export class PendingRequestsService {

    public pendingRequestsSubject = new BehaviorSubject<number>(0);

    pendingRequests: number;

    constructor() {
      this.pendingRequests = 0;
    }

    subscribe(e: any) {
      return this.pendingRequestsSubject.subscribe(e);
    }

    increase() {
      this.pendingRequests ++;
      this.updateStream();
    }

    decrease() {
      this.pendingRequests --;
      this.updateStream();
    }

    getPendingRequests() {
      return this.pendingRequests;
    }

    private updateStream() {
      this.pendingRequestsSubject.next(this.pendingRequests);
    }


}
