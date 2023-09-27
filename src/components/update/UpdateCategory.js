import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Card, Button } from 'react-bootstrap';
import { Context } from "../..";
import { fetchCategory } from "../../http/categoryAPI";


const UpdateCategory = observer(() => {

    const { store } = useContext(Context)
    const put_name = useRef(null);
    const [input, setInput] = useState('')
    const [category, setCategorys] = useState([]);


    const handleUpdate = () => {
        put_name.current.focus();
    }

    const updateCategoryItem = () => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            // const id = question.task.id;
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

    const deleteCategory = async (id) => {
        try {
            let header = {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            };
            let token = localStorage.getItem('token');
            if (token) header.Authorization = `Bearer ${token}`;

            axios.post(`${process.env.REACT_APP_API_URL}category/some/${id}`, {
                id: store.categor.id,
            },
                { withCredentials: true, headers: header }).then((json) => {
                    alert('Success')
                    fetchCategory().then(data => store.setCategory(data))
                });
            
            setCategorys(
                category.filter((categor) => {
                    return categor.id !== id;
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
            <Card style={{ width: 400 }} className="p-4 mt-4">

                <div className="d-flex justify-content-space-between align-items-center">
                    <h3>UpdateCategory</h3>
                </div>


                <div className="d-flex justify-content-space-between">
                    <div>
                        {store.category.map(categor =>
                            <div key={categor.id} className="d-flex justify-content-space-between">
                                <Form.Control
                                    ref={put_name}
                                    className="mt-3"
                                    value={categor.name}
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
                                {/* <Button
                                    data-id={categor.id}
                                    variant="warning"
                                    className="mt-3 "
                                    onClick={updateCategoryItem}
                                >
                                    save
                                </Button> */}
                                <Button
                                    className="mt-3"
                                    variant={"outline-danger"}
                                    onClick={() => deleteCategory(categor.id)}
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

export default UpdateCategory