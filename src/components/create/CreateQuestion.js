import React, { useContext, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import { Context } from "../..";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import axios from "axios";
import { observer } from "mobx-react-lite";

const CreateQuestion = observer(() => {
    const { store } = useContext(Context)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const addQuestion = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };

            let token = localStorage.getItem('token');
            console.log(token)

            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}question`, {
                task: store.selectedTask.id,
                name: name,
                description: description,
                category: store.selectedCategories.id
            },

                { withCredentials: true, headers: header }).then((json) => {
                    alert('Success')
                    setName('')
                    setDescription('')      
                })

        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }
    }
    


    return (
        <div>
            <Card style={{ width: 400 }} className="p-4 mb-4">
                <Form className="d-flex flex-column">
                    <h3>CreateQuestion</h3>

                    <Dropdown >
                        <Dropdown.Toggle>{store.selectedTask.name || 'Выберите task'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {store.task.map(task =>
                                <Dropdown.Item
                                    key={task.id}
                                    onClick={() => store.setSelectedTask(task)}
                                >
                                    {task.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className="mt-3"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{store.selectedCategories.name || 'Выберите категорию'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {store.category.map(cat =>
                                <Dropdown.Item
                                    key={cat.id}
                                    onClick={() => store.setSelectedCategories(cat)}
                                >
                                    {cat.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-success"}
                        onClick={addQuestion}
                    >
                        Додати
                    </Button>
                </Form>
            </Card>
        </div>
    )
})

export default CreateQuestion