import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorLevel'
})
export class ColorLevelPipe implements PipeTransform {

  transform(value: number, minValue: number = 0 , maxValue: number = 100, ...colors :string[]): any {
    if(!colors)
      colors = ['green','yellow','orange','red'];
    let style = {color : 'black'};
    for (let i = colors.length-1; i >= 0; i--) {
      if(value >= ((maxValue - minValue) * (i/(colors.length))) + minValue) style.color = colors[i];
    }
    return style;
  }

}
