import React, { useContext, useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import CreateTask from "../../../create/CreateTask";
import CreateCategory from "../../../create/CreateCategory";
import CreateQuestion from "../../../create/CreateQuestion";
import { fetchCategory } from "../../../../http/categoryAPI";
import { Context } from "../../../../index";
import { fetchTask } from "../../../../http/taskAPI";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UpdateTask from "../../../update/UpdateTask";
import UpdateCategory from "../../../update/UpdateCategory";
import { observer } from "mobx-react-lite";
// import UpdateQuestion from "../components/update/UpdateQuestion";
// import { fetchQuestion } from "../http/questionAPI";
// import Sonnet from '../../components/Sonnet';


const AdminCreate = observer(() => {

    const { store } = useContext(Context)
    const [key, setKey] = useState('update');

    useEffect(() => {
        fetchCategory().then(data => store.setCategory(data))
        fetchTask().then(data => store.setTask(data))
        // fetchQuestion().then(data => store.setQuestion(data))
    },[fetchTask(), fetchCategory(), /*fetchQuestion()*/])

    return (
        <Container
            className="d-flex flex-column"
            style={{ height: window.innerHeight }}
        >
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-3"
            >
                <Tab eventKey="create" title="Create">
                    <CreateTask />
                    <CreateCategory />
                    <CreateQuestion />
                </Tab>
                <Tab className="d-flex justify-content-space-between" eventKey="update" title="Update / delete">
                    <UpdateTask/>
                    <UpdateCategory/>
                    {/* <UpdateQuestion/> */}
                </Tab>
            </Tabs>
        </Container>
    );
})

export default AdminCreate