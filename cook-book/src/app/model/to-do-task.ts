export class toDo {
  set taskName(value: String) {
    this._taskName = value;
  }

  set task(value: String) {
    this._task = value;
  }

  set creationDate(value: String) {
    this._creationDate = value;
  }

  set completeBy(value: String) {
    this._completeBy = value;
  }
  private _taskName: String;
  private _task: String;
  private _creationDate: String;
  private _completeBy: String;

  get taskName(): String {
    return this._taskName;
  }

  get task(): String {
    return this._task;
  }

  get creationDate(): String {
    return this._creationDate;
  }

  get completeBy(): String {
    return this._completeBy;
  }

  constructor(taskName: String, task: String, creationDate: String, completeBy: String) {
    this._taskName = taskName;
    this._task = task;
    this._creationDate = creationDate;
    this._completeBy = completeBy;
  }
}
