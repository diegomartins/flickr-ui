import { Component, Input } from "@angular/core";

@Component({
    selector: "result-set",
    templateUrl: "./result-set.component.html",
    styleUrls: ["result-set.component.css"]
})
export class ResultSetComponent {

    @Input() resultSet: Array<any>;
}