import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancyQuotes'
})
export class FancyQuotesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
