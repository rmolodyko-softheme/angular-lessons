import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/user';

@Pipe({
  name: 'prefixName'
})
export class PrefixNamePipe implements PipeTransform {
  transform(value: any, gender?: Gender): any {
    if (gender === undefined) {
      return value;
    } else {
      if (gender === Gender.Female) {
        return 'Mrs. ' + value;
      } else {
        return 'Mr. ' + value;
      }
    }
  }
}
