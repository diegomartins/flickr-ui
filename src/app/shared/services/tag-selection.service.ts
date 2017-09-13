import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";



@Injectable()
export class TagSelectionService {

    public tagSelectionSubject = new BehaviorSubject<number>(0);

    constructor() {}

    subscribe(e: any) {
      return this.tagSelectionSubject.subscribe(e);
    }

    publish(tag) {
       this.tagSelectionSubject.next(tag);
    }

}
