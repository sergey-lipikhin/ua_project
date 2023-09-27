import axios from "axios";
import React, { useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import { createTask } from "../../http/taskAPI";

const CreateTask = () => {

    const [value, setValue] = useState('')
    const addTask = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };

            let token = localStorage.getItem('token');
            console.log(token)

            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}task`, {
                name: value,
            },
            
                { withCredentials: true, headers: header }).then((json) => {
                    alert('Success')
                    setValue('')
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
            <Card style={{ width: 400 }} className="p-4 mb-4 mt-4">
                <Form className="d-flex flex-column">
                    <h3>CreateTask</h3>
                    <Form.Control
                        className="mt-3"
                        placeholder="task"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-success"}
                        onClick={addTask}
                    >
                        Додати
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default CreateTask