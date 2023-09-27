import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useRef, useState } from "react";
import { Form, Card, Button, InputGroup } from 'react-bootstrap';
import { Context } from "../..";


const UpdateQuestion = observer(() => {

    const { store } = useContext(Context)
    const put_name = useRef(null);
    const [input, setInput] = useState('')
    const [question, setQuestion] = useState([]);


    const handleUpdate = () => {
        put_name.current.focus();
    }

    const updateQuestionItem = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            const id = store.task.id;
            axios.put(`${process.env.REACT_APP_API_URL}task`, {
                id: store.task.id,
                name: put_name.current.value()
            },

                { withCredentials: true, headers: header }).then((json) => {
                    alert(json)
                    alert('Success')
                })
        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data);
            }

        }
    }

    const deleteQuestion = async (id) => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}question/some/${id}`, {
                id: store.quest.id,
            });
            setQuestion(
                question.filter((quest) => {
                    return quest.id !== id;
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
                    <h3>UpdateQuestion</h3>
                </div>


                <div className="d-flex justify-content-space-between ">
                    <div>
                        {store.question.map(quest =>
                            <div key={quest.id} className="d-flex justify-content-space-between">
                                <Form.Control
                                    ref={put_name}
                                    className="mt-3"
                                    value={quest.name}
                                    // onChange={handleUpdate}
                                    onChange={(e) => setInput(e.target.value)}

                                >
                                </Form.Control>

                                <Button
                                    variant="warning"
                                    className="mt-3 "
                                    onClick={handleUpdate}
                                >
                                    &#128393;
                                </Button>
                                <Button
                                    className="mt-3"
                                    variant={"outline-danger"}
                                    onClick={() => deleteQuestion(quest.id)}
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

export default UpdateQuestion