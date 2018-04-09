class TaskCollection {
  constructor() {
    this.data = [];
  }

  create (task) {
    task.code = this.data.length;
    this.data.push(task);
  }

  retrieve (code) {

  }

  // update () {
  //
  // }

  remove (code) {

  }
}
