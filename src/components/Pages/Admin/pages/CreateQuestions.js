import React from "react";
import { Form, Card, Container, Button } from 'react-bootstrap';

const CreateQuestion = () => {

    return (

        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight }}
        >
            <Card style={{ width: 400 }} className="p-4">
                <Form className="d-flex flex-column">
                    <h3>CreateQuestion</h3>
                    <Form.Control
                        className="mt-3"
                        placeholder="Питання"
                    />
                    <Button
                        className="mt-3 align-self-end"
                        variant={"outline-success"}
                    >
                        Додати
                    </Button>
                </Form>
            </Card>

        </Container>
    );
}

export default CreateQuestion;