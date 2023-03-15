import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {
/**
 * Convertit les valeur numérique en texte avec le symbole Fahrenheit
 * @param value température à transformer
 * @param needConvert défini si besoin de passer de Celcius à Fahrenheit
 * @returns texte avec le symbole
 */
  transform(value: number, needConvert : boolean): string {
    let result = value;
    if(needConvert)
      result = (value * (9/5)) +32;
    return `${result} °F`;
  }

}
