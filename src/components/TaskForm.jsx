import React from "react";
import { useRef } from "react";

const TaskForm = (props) => {
    const input = useRef();

    function onFormSubmit(event) {
        event.preventDefault(); //empeche le chargemebt de la page

        let newTaskTitle = input.current.value.trim(); // creer la variable permettant de recuperer les donnée dans l'input

        if (newTaskTitle === "") return; //trim permet de delete les espaces

        //creation de l'evenment
        props.onAddTask(newTaskTitle);

        input.current.value = "";
    }

    return (
        <div className="input">
            <form action="#" onSubmit={onFormSubmit}>
                <input type="text" placeholder="nouvelle tache" ref={input} className="button" />
                <span className="Ajou">
                    <button type="submit" className="Ajouter">
                        Ajouter
                    </button>
                </span>
            </form>
        </div>
    );
};

export default TaskForm;
