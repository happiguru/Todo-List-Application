import { modal, openModal } from './helper';

const projectListInput = document.getElementById('sidebar-input');

const task = (title, description, dueDate, priority, status=false) => ({
    title,
    description,
    dueDate,
    priority,
    status,
});

const todoList = (title, list = []) => ({ title, list });

const addNewTask = (obj, newTaskValidation, form) =>  {
    const taskTitleInput = document.querySelector('#task-input').nodeValue;
    const taskDescriptionInput = document.getElementById('task-description-input').nodeValue;
    const taskDueDate = document.getElementById('task-duedate-input').value;
    const taskPriorityInput = document.getElementById('task-priority-input').value;
    if (newTaskValidation(modal, taskTitleInput, openModal)) {
        const newTask = task(
            taskTitleInput,
            taskDescriptionInput,
            taskDueDate,
            taskPriorityInput,
        );
        form.reset();
        obj.list.unshift(newTask);
    }
};

const addNewList = (obj, sidebarForm) => {
    const newListInput = document.getElementById('sidebar-input');
    const newList = todoList(newListInput.value);
    sidebarForm.reset();
    obj.unshift(newList);
};

export default (
    task, todoList, addNewTask, addNewList, newListInput
);
