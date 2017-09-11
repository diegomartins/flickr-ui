import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "./loading/loading.component";
import { ServicesModule } from "../services/services.module";

@NgModule({
    imports: [
        CommonModule,
        ServicesModule
    ],
    exports: [LoadingComponent],
    declarations: [LoadingComponent],
    providers: []
})
export class TaglibModule { }
