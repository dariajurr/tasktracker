import { Pipe, PipeTransform } from '@angular/core';
import { DISPLAY_COLUMS_TYPE_NAME, DisplayedColumnsType } from 'src/core/interfaces/table.interface';

@Pipe({
  name: 'getDisplayColumnName',
  standalone: true
})
export class GetDisplayColumnNamePipe implements PipeTransform {
  
  transform(value: string): string {
    return DISPLAY_COLUMS_TYPE_NAME[value as DisplayedColumnsType];
  }

}
