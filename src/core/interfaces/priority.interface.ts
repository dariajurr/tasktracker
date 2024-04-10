export enum PriorityType {
  HIGH = 'HIGH',
  MIDDLE = 'MiDDLE',
  LOW = 'LOW',
}

export enum PriorityTypeName {
  HIGH = 'Высокий',
  MIDDLE = 'Средний',
  LOW = 'Низкий',
}

export const PRIORITY_TYPE_NAME = {
  [PriorityType.HIGH]: PriorityTypeName.HIGH,
  [PriorityType.MIDDLE]: PriorityTypeName.MIDDLE,
  [PriorityType.LOW]: PriorityTypeName.LOW,
};

export const PRIORITIES = [
  { value: PriorityType.HIGH, name: PriorityTypeName.HIGH },
  { value: PriorityType.MIDDLE, name: PriorityTypeName.MIDDLE },
  { value: PriorityType.LOW, name: PriorityTypeName.LOW },
];




