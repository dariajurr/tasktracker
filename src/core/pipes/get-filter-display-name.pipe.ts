import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_TYPE_NAME, StatusType } from 'src/core/interfaces/status.interface';
import { DisplayedColumnsType } from 'src/core/interfaces/table.interface';
import { TaskTableFilter } from 'src/core/interfaces/task.interface';

@Pipe({
  name: 'getFilterDisplayName',
  standalone: true
})
export class GetFilterDisplayNamePipe implements PipeTransform {
  constructor(private date: DatePipe) {}

  transform(value: string, ...args: TaskTableFilter[]): string | null {
    if (value === 'All') {
      return 'Любой'
    }
    switch (args[0].name) {
      case DisplayedColumnsType.STATUS:
        return STATUS_TYPE_NAME[value as StatusType];
      case DisplayedColumnsType.DEADLINE:
        return this.date.transform(value, 'dd.MM.yyyy');
      default:
        return value;
    }
    return null;
  }

}
