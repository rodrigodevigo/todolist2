class TaskController {
  constructor(model) {
    this.model = model;
  }

  createTask (description) {
    if (description == '') {
      return false;
    }
    let task = new Task(description, new Date());
    this.model.create(task);
    return true;
  }

  completeTask (code) {
    let task = this.model.retrieve(code);
    if (task == null) {
      return false;
    }
    task.isCompleted = true;
    return true;
  }


}
