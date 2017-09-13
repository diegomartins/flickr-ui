import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'author' })
export class AuthorPipe implements PipeTransform {

    transform(fullStr: string): string {

        if (fullStr) {
            const authorName = this.extractTextBetweenQuotes(fullStr);
            return authorName;;
        }
    }

    private extractTextBetweenQuotes(text: string) {
        const start = text.indexOf('"');
        const end = text.indexOf('"', start + 1);
        return text.substr(start + 1, end-start-1);
    }
}