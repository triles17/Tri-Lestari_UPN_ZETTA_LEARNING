import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truth'
})
export class TruthPipe implements PipeTransform {

  transform(value: any): any {
    if (value == "active") {
      return true;
    } else {
      return false;
    }
  }

}