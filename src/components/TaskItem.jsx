import React, { Component } from "react";
import EditableField from "./EditableField";

const TaskItem = (props) => {
    const { title, isDone } = props.task;

    function onCheck() {
        props.onUpdate(props.task, { isDone: !isDone });
    }

    function onRemove() {
        props.onRemove(props.task);
    }

    function onValueChange(text) {
        props.onUpdate(props.task, { title: text });
    }

    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={isDone} onChange={onCheck} />
                <EditableField value={title} editMode={false} onValueChange={onValueChange} />
                <button title="Supprimer" className="button-icon" onClick={onRemove}>
                    ❌
                </button>
            </label>
        </li>
    );
};

export default TaskItem;
