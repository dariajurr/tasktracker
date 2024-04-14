import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {
  PRIORITY_TYPE_NAME,
  PriorityType,
} from 'src/core/interfaces/priority.interface';
import {
  STATUS_TYPE_NAME,
  StatusType,
} from 'src/core/interfaces/status.interface';
import { DisplayedColumnsType } from 'src/core/interfaces/table.interface';


@Pipe({
  name: 'getDisplayName',
  standalone: true,
})
export class GetDisplayNamePipe implements PipeTransform {
  constructor(private date: DatePipe) {}

  transform(value: string, columnName: string): string | null {
    switch (columnName) {
      case DisplayedColumnsType.DEADLINE:
        return this.date.transform(value, 'dd.MM.yyyy');
      case DisplayedColumnsType.PRIORITY:
        return PRIORITY_TYPE_NAME[value as PriorityType];
      case DisplayedColumnsType.STATUS:
        return STATUS_TYPE_NAME[value as StatusType];
      default:
        return value;
    }
  }
}
