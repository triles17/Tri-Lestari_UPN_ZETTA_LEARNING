import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], keyfilter: any): any {
    if (keyfilter == '' || data.length == 0) {
      return data;
    } else {
      return data.filter((datafill) => {
        return (
          datafill.email.toLowerCase().split(' ').join('').indexOf(keyfilter.toLowerCase()) >= 0 ||
          datafill.first_name.toLowerCase().split(' ').join('').indexOf(keyfilter.toLowerCase()) >= 0 ||
          datafill.last_name.toLowerCase().split(' ').join('').indexOf(keyfilter.toLowerCase()) >= 0 ||
          datafill.company.user_type.toLowerCase().split(' ').join('').indexOf(keyfilter.toLowerCase()) >= 0)
      })
    }
  }

}