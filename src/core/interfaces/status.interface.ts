export enum StatusType {
  CREATE = 'CREATE',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export enum StatusTypeName {
  CREATE = 'Создана',
  IN_PROGRESS = 'В работе',
  COMPLETED = 'Завершена',
}

export const STATUS_TYPE_NAME = {
  [StatusType.CREATE]: StatusTypeName.CREATE,
  [StatusType.IN_PROGRESS]: StatusTypeName.IN_PROGRESS,
  [StatusType.COMPLETED]: StatusTypeName.COMPLETED,
};

export const STATUSES = [
  { value: StatusType.CREATE, name: StatusTypeName.CREATE },
  { value: StatusType.IN_PROGRESS, name: StatusTypeName.IN_PROGRESS },
  { value: StatusType.COMPLETED, name: StatusTypeName.COMPLETED },
];

