export enum DisplayedColumnsType {
  TITLE = 'title',
  DEADLINE = 'deadline',
  PRIORITY = 'priority',
  STATUS = 'status',
  PERFORMER = 'performer',
}

export enum DisplayedColumnsTypeName {
  TITLE = 'Название',
  DEADLINE = 'Дедлайн',
  PRIORITY = 'Приоритет',
  STATUS = 'Статус',
  PERFORMER = 'Исполнитель',
}

export const DISPLAY_COLUMS_TYPE_NAME = {
  [DisplayedColumnsType.TITLE]: DisplayedColumnsTypeName.TITLE,
  [DisplayedColumnsType.DEADLINE]: DisplayedColumnsTypeName.DEADLINE,
  [DisplayedColumnsType.PRIORITY]: DisplayedColumnsTypeName.PRIORITY,
  [DisplayedColumnsType.STATUS]: DisplayedColumnsTypeName.STATUS,
  [DisplayedColumnsType.PERFORMER]: DisplayedColumnsTypeName.PERFORMER,
};
