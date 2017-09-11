import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'strToArr' })
export class StringToArrayPipe implements PipeTransform {

    transform(asStr: string): string[] {

        if (asStr) {
            let asArray = asStr.split(" ");
            return asArray;
        }

    }
}