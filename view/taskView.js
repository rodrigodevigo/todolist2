class TaskView {
  constructor (controller, model) {
    this.addButton = document.querySelector('#taskbutton');
    this.taskField = document.querySelector('#taskfield');
    this.taskList = document.querySelector('#tasklist');
    this.model = model;
    this.controller = controller;
    this.addButton.onclick = this.createTask.bind(this);
  }

  createTask () {
    let description = this.taskField.value;
    if (this.controller.createTask(description) == false) {
      alert('Descrição vazia');
    }
    this.show();
  }

  completeTask (code) {
    if (controller.completeTask(code) == false) {
      alert('Tarefa não existe');
    }
    this.show();
  }

  show () {
    this.taskList.innerHTML = '';
    for (var i = 0;i < this.model.data.length; i++) {
      let task = this.model.data[i];
      this.taskList.innerHTML += '<div class="grid_12 task_container">' +
          '<div class="task">' +
          '  <p>'+task.printInfo()+'</p>'+
          '</div>'+
          '<div class="task_action">'+
            '<button type="button" data-id="'+task.code+'" name="completeButton">Completado ?</button>'+
          '</div>'+
        '</div>';
    }
  }


}
