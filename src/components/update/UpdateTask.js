import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import { Context } from "../..";
import { fetchTask } from "../../http/taskAPI";


const UpdateTask = observer(() => {

    const { store } = useContext(Context)
    const put_name = useRef(null);
    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState([]);


    const handleUpdate = ({ target }) => {
        const { id } = target.dataset;
        console.log(id)
        put_name.current.focus();
    }

    const updateTaskItem = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            // const id = store.task.id;
            axios.put(`${process.env.REACT_APP_API_URL}task`, {
                id: store.task.id,
                name: put_name.current.value()
            },

                { withCredentials: true, headers: header }).then((json) => {
                    alert('Success')
                })
        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }
    }

    const 
    deleteTask = async (id) => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}task/some/${id}`, {
                id: store.task.id,
            },
                { withCredentials: true, headers: header }).then((json) => {
                    alert('Success')
                    fetchTask().then(data => store.setTask(data))
                });

            setTasks(
                tasks.filter((task) => {
                    return task.id !== id;
                })
            );
        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }

    };


    return (
        <div>
            <Card style={{ width: 400 }} className="p-4 m-4">

                <div className="d-flex justify-content-space-between align-items-center">
                    <h3>UpdateTask</h3>
                </div>


                <div className="d-flex justify-content-space-between">
                    <div>
                        {store.task.map(task =>
                            <div key={task.id} className="d-flex justify-content-space-between">
                                <Form.Control
                                    ref={put_name}
                                    className="mt-3"
                                    value={task.name}
                                    onChange={(e) => setInput(e.target.value)}

                                >
                                </Form.Control>

                                <Button
                                    data-id={task.id}
                                    variant="warning"
                                    className="mt-3 "
                                    onClick={handleUpdate}
                                >
                                    &#128393;
                                </Button>
                                {/* <Button
                                    data-id={task.id}
                                    variant="warning"
                                    className="mt-3 "
                                    onClick={updateTaskItem}
                                >
                                    save
                                </Button> */}
                                <Button
                                    className="mt-3"
                                    variant={"outline-danger"}
                                    onClick={() => deleteTask(task.id)}
                                >
                                    &#128465;
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

            </Card>
        </div>
    )
})

export default UpdateTask