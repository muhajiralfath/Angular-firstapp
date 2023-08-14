import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(date: Date): number {
    // let stringResult : string =  moment(date, "YYYYMMDD").fromNow();
    // console.log(stringResult)
    // let age: number = parseInt(stringResult, 10)
    // return age;
    return moment().diff(date, "year")
  }
}
