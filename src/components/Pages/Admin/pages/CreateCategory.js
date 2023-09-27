import React from "react";
import Select from 'react-select'
import { Card, Container, Button } from 'react-bootstrap';

const CreateCategory = () => {

    const options = [
        { value: '1', label: 'Історики' },
        { value: '2', label: 'Українська революція' },
        { value: '3', label: 'Козацтво' },
        { value: '4', label: 'Архітектура та місцевість' },
        { value: '5', label: 'Громадські діячі' },
    ]
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight }}
        >
            <Card style={{ width: 400 }} className="p-4">
                <h3>CreateCategory</h3>
                <Select
                    options={options}
                    placeholder='Література' />
                <Button
                    className="mt-3 align-self-end"
                    variant={"outline-success"}
                >
                    Додати
                </Button>
            </Card>

        </Container>
    );
}

export default CreateCategory;