import { modal, openModal } from './helper';

const projectListInput = document.getElementById('sidebar-input');

const task = (title, description, dueDate, priority, status=false) => ({
    title,
    description,
    dueDate,
    priority,
    status,
});

