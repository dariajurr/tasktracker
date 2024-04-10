import { Pipe, PipeTransform } from '@angular/core';
import { PRIORITY_TYPE_NAME, PriorityType } from 'src/core/interfaces/priority.interface';

@Pipe({
  name: 'priorityName',
  standalone: true
})
export class PriorityNamePipe implements PipeTransform {

  transform(value: PriorityType): unknown {    
    return PRIORITY_TYPE_NAME[value];
  }

}
