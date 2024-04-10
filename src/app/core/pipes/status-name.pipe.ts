import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_TYPE_NAME, StatusType } from 'src/core/interfaces/status.interface';

@Pipe({
  name: 'statusName',
  standalone: true
})
export class StatusNamePipe implements PipeTransform {

  transform(value: StatusType): unknown {    
    return STATUS_TYPE_NAME[value];
  }

}