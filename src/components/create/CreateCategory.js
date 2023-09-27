import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';


const CreateCategory = () => {

    const [value, setValue] = useState('')
    const addCategory = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };

            let token = localStorage.getItem('token');
            console.log(token)

            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}category`, {
                name: value,
            },
            
                { withCredentials: true, headers: header }).then((json) => {
                    alert(json)
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
            <Card style={{ width: 400 }} className="p-4 mb-4">
                <h3>CreateCategory</h3>

                <Form.Control
                    className="mt-3"
                    placeholder="category"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <Button
                    className="mt-3 align-self-end"
                    variant={"outline-success"}
                    onClick={addCategory}
                >
                    Додати
                </Button>
            </Card>
        </div>
    )
}

export default CreateCategory