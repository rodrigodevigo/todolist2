class TaskCollection {
  constructor() {
    this.data = [];
  }

  create (task) {
    task.code = this.data.length;
    this.data.push(task);
  }

  retrieve (code) {
    return this.data.find((task) => {
      return task.code == code;
    });
  }

  // update () {
  //
  // }

  remove (code) {

  }
}
