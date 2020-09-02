import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    // Traitement pour inverser une chane de caractères
    let result = '';
    for (let i = value.length - 1; i >=0; i--) {
      result += value[i];
    }
    return result;
  }

}
