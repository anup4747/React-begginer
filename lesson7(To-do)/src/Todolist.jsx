import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Walk dog", "Study", "Internship"]);
    const [addtask, setaddtask] = useState("");

    const add_task = () => {
        const newtask = document.getElementById("add-task").value;
        if (newtask.trim() !== "") {

            setTasks([...tasks, newtask])
            document.getElementById("add-task").value = "";
        }
    }

    const delete_task = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        console.log(updatedTasks)
        setTasks(updatedTasks);
    }
    const Move_up = (index) => {
        const updatedTasks = [...tasks];

        if (updatedTasks[index-1] == undefined) {

            setTasks(updatedTasks)
        } else {
            // console.log(updatedTasks[index+1]);
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)

        }
    }

    const Move_down = (index) => {
        const updatedTasks = [...tasks];

        if (updatedTasks[index+1] == undefined) {

            setTasks(updatedTasks)
        } else {
            // console.log(updatedTasks[index+1]);
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)

        }

    }

    return (
        <div className="card">
            <h1 className="header">To-Do-List</h1>

            <div>
                <input type="text" id="add-task" placeholder="Enter the task..." />
                <button style={{ marginTop: 0, fontSize: 17, marginLeft: 12, height: 45, width: 45 }} onClick={add_task}><i class='bx bx-send'></i></button>

            </div>
            <ul style={{ listStyleType: "none" }}>
                {tasks.map((task, index) =>

                    <li key={index}>
                        <span>{task}</span>
                        <div>
                            <button onClick={() => delete_task(index)}><i class='bx bx-no-entry' ></i></button>
                            <button onClick={() => Move_up(index)}><i class='bx bx-up-arrow-alt'></i></button>
                            <button onClick={() => Move_down(index)}><i class='bx bx-down-arrow-alt' ></i></button>
                        </div>

                    </li>

                )}
            </ul>

        </div>
    )
}

export default ToDoList;