
var tasks = [];

var taskButton = document.querySelector("#taskbutton");

var task_render = function(task, index) {
  var item = '<div class="grid_12 task_container">' +
    '<div class="task">' +
    '  <p>'+task+'</p>'+
    '</div>'+
    '<div class="task_action">'+
      '<button type="button" data-id="'+index+'" name="completeButton">Completado ?</button>'+
    '</div>'+
  '</div>';
  taskList += item;
}


taskButton.onclick = function (event) {
  let task = document.querySelector("#taskfield").value;
  tasks.push(task);
  taskList = '';
  var taskListObj = document.querySelector("#tasklist");
  tasks.forEach (task_render);
  taskListObj.innerHTML = taskList;
};
