import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorLevel'
})
export class ColorLevelPipe implements PipeTransform {

  transform(value: number, minValue: number = 0 , maxValue: number = 100, ...colors :string[]): any {
    if(!colors || colors.length == 0)
      colors = ['green','yellow','orange','red'];
    let style = {color : 'black'};
    let diff_total = maxValue - minValue;
    let diff = value - minValue;
    console.log(Math.floor((diff/diff_total)*(colors.length)));
    style.color = colors[Math.floor((diff/diff_total)*(colors.length))%colors.length];

    return style;
  }

}
