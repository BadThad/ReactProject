import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import "../ToDoList.css";

function ToDoList () {
    const [list, setList] = useState([])

        function handleAddItem () {
            const newItem = document.getElementById("itemInput").value;
            document.getElementById("itemInput").value = "";

            setList ((list) =>[...list, newItem]);
        }

        function handleRemoveItem (index) {
            setList(list.filter((_, i) => i !== index))
        }

    return (
        <div className="todolist-container">
            <h2 className="todolist-title">My ToDo List</h2>
            <ul>
                {list.map((task, index) => (
                    <li key={index}> {task}
                        <button className="delete-task-btn" onClick={ () => handleRemoveItem(index)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </li>   
                ))}
            </ul>
            <input type="text" placeholder="Type what you need to do..." id="itemInput"/>
            <button className="add-item-btn" onClick={handleAddItem}>Add to list</button>
        </div>
    );
}

export default ToDoList