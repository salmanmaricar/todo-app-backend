export class TodoItem {
  private _itemName: string;
  private _itemDueDate: string;

  constructor(itemName: string, itemDueDate: string) {
    this._itemName = itemName;
    this._itemDueDate = itemDueDate;
  }

  get itemName(): string {
    return this._itemName;
  }

  set itemName(value: string) {
    this._itemName = value;
  }

  get itemDueDate(): string {
    return this._itemDueDate;
  }

  set itemDueDate(value: string) {
    this._itemDueDate = value;
  }
}
