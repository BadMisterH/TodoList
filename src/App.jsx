import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// import "";

import TodoList from "./components/TodoList";
import StorageService from "./StorageService";

const App = () => {
    const [lists, setLists] = useState([]);

    //FONCTION QUI SERA D2CLENCHER AU CHARGEMENT DU COMPOSANT
    useEffect(() => {
        //RECUPERATION DES DONNEES SAUVEGARDER
        const data = StorageService.load();
        setLists([...data]);
    }, []);

    function addList() {}

    function saveList(updatedTodolist) {
        let pos = lists.findIndex((list) => list.id === updatedTodolist.id);
        if (pos > -1) {
            lists.splice(pos, 1, updatedTodolist);
            StorageService.save(lists);
        }
    }

    function addList() {
        lists.push({
            id: nanoid(),
            title: "Nouvelle liste …",
            tasks: [],
        });
        setLists([...lists]);
    }

    function MaFonction(tbLASupprimer) {
        let position = lists.findIndex((list) => list.id === tbLASupprimer.id);
        if (position > -1) {
            lists.splice(position, 1);
            setLists([...lists]);
        } else {
            console.log(position, tbLASupprimer);
        }

        // donner au composant parent d'utiliser la fonction MaFonction
    }

    return (
        <>
            <h1>TODO LIST</h1>
            <div className="Ajou">
                <button className="buttonAdd" onClick={addList}>
                    ➕ Ajouter une nouvelle liste
                </button>
            </div>
            {lists.map((todolist) => (
                <TodoList onChange={saveList} key={todolist.id} todolist={todolist} onSup={MaFonction} />
            ))}
        </>
    );
};

export default App;
