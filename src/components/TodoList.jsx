import { useState, useRef, StyleSheet, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { nanoid } from "nanoid";
import EditableField from "./EditableField";

function TodoList(props) {
    const [todolist, setTodolist] = useState(props.todolist);

    useEffect(() => {
        props.onChange(todolist);
    }, [todolist, props]);

    function changeListTitle(newTitle) {
        todolist.title = newTitle;
        setTodolist({ ...todolist });
    }

    function updateTask(initialTask, updates) {
        let pos = todolist.tasks.indexOf(initialTask);
        if (pos > -1) {
            let taskUpdate = { ...initialTask, ...updates };
            todolist.tasks.splice(pos, 1, taskUpdate);
            setTodolist({ ...todolist });
        }
    }

    // function onCheck(task) {
    //     task.isDone = !task.isDone;
    //     setTasks([...tasks]);
    // }

    function onAddTask(title) {
        todolist.tasks.push({
            id: nanoid(),
            title: title,
            isDone: false,
        });

        setTodolist({ ...todolist });
    }

    function removeTask(task) {
        let pos = todolist.tasks.indexOf(task);
        if (pos > -1) {
            todolist.tasks.splice(pos, 1); //Supprime l'élément à la position "pas" du tableau
            setTodolist({ ...todolist });
        }
    }

    function onSup() {
        props.onSup(todolist);
    }

    const nbDone = todolist.tasks.filter((task) => task.isDone === true).length;

    return (
        <div className="container">
            <div className="TodoApp">
                <h1>
                    <EditableField value={todolist.title} editMode={false} onValueChange={changeListTitle} />
                </h1>
                <button title="Supprimer cette liste" className="button-icon" onClick={onSup}>
                    ❌
                </button>
                <TaskForm onAddTask={onAddTask} />
                <p className="ecritureee">
                    {nbDone}/{todolist.tasks.length} effectuer
                </p>
                <ul>
                    {todolist.tasks.map((task, index) => (
                        <TaskItem key={task.id} task={task} onUpdate={updateTask} onRemove={removeTask} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
