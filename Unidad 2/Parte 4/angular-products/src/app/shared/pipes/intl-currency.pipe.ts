import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlCurrency',
  standalone: true
})
export class IntlCurrencyPipe implements PipeTransform {
  transform(price: number, currency: string, lang = 'es-ES'): string {
    return new Intl.NumberFormat(lang, { style:"currency" ,currency}).format(price);
  }
}

