import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import "../ToDoList.css";

function ToDoList () {
    const [list, setList] = useState([]);               // A useState with an array for list of Todo items.
    const [inputValue, setInputValue] = useState("");   // A useState to manage user input with an initial state of an empty string.

        // Function which tracks the value in the input field.
        function handleInput (e) {
            setInputValue(e.target.value);
        }

        // Function which handles adding an item to the ToDo list.
        function handleAddItem () {         

            setList ([...list, inputValue]);    // This updates and expands the ToDo list array using a spread (...) syntax and the value the user inputs.
            setInputValue("");                  // Clears the input field on button click.
        }

        // Function which removes a ToDo list item.
        function handleRemoveItem (index) {                 
            setList(list.filter((_, i) => i !== index));    // Updates the list by creating a new array using the filter method.
        }                                                   // This new array will not contain the user-added input element connected to the delete button.

    return (
        <div className="todolist-container">
            <h2 className="todolist-title">My ToDo List</h2>
            <ul>
                {list.map((list, index) => (
                    <li key={index}> {list}
                        <button className="delete-task-btn" onClick={ () => handleRemoveItem(index)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </li>   
                ))}
            </ul>
            <label>
                <input 
                    type="text" 
                    placeholder="Type what you need to do..." 
                    value = {inputValue}
                    onChange={handleInput}
                />
            </label>
            <button className="add-item-btn" onClick={handleAddItem}>Add to list</button>
        </div>
    );
}

export default ToDoList