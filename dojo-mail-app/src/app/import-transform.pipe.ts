import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'importtransform'})
export class ImportTransform implements PipeTransform {
  transform(value: boolean): string {
    let response: string;
    value ? response = "High" : response = "Low";
    return response;
  }
}
