import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Page8() {

    const [data, setData] = useState({
        title: "",
        map: "",
        
       
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page8",
        });

        setData(res.data);
    };

    return (
        <Container className="p-5">
            <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.title}
                    onChange={(e) => { setData({ ...data, title: e.target.value }) }}

                />
            </FloatingLabel>


            <FloatingLabel
                controlId="floatingInput"
                label="Map"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.map}
                    onChange={(e) => { setData({ ...data, map: e.target.value }) }}

                />
            </FloatingLabel>

            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/page8/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/page8/",
                            data
                        });
                    }



                }}>
                SAVE
            </Button>



        </Container>
    );
}

export default Page8;