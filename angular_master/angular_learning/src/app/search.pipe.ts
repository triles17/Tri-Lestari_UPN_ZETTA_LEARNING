import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], filterkey: any): any {
    if (data.length == 0 || filterkey == '') {
      return data;
    } else {
      return data.filter((parse) => {
        return parse.title.toLowerCase().split(' ').join('').indexOf(filterkey.toLowerCase()) >= 0;
      })
    }
  }

}