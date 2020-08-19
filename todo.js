const task_input = document.getElementById('text-input');

function addTask() {
    // create container div
    var task_div = document.createElement('div');
    task_div.className = 'task';

    // add task name
    var task_name = document.createElement('h2');
    task_name.textContent = task_input.value;
    task_div.append(task_name);

    // add remove button
    var task_del = document.createElement('button');
    task_del.setAttribute('onclick', 'removeTask(this);');

    var del_icon = document.createElement('i');
    del_icon.className = 'material-icons';
    del_icon.textContent = 'delete'

    task_del.append(del_icon);
    task_div.append(task_del);

    // add div to the page
    document.body.append(task_div);

    // clear input
    task_input.value = '';

}

function removeTask(btn) {
    btn.parentElement.remove();
}