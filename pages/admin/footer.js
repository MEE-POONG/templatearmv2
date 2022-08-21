import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Footer() {

    const [data, setData] = useState({
        local: "",
        des: "",
        tel:"",
        line:"",
        facebook:"",
        instagrm:"",
        email:"",
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/footer",
        });

        setData(res.data);
    };

    return (
        <Container className="p-5">
            <FloatingLabel
                controlId="floatingInput"
                label="ABOUT"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.des}
                    onChange={(e) => { setData({ ...data, des: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="LOCATION"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.local}
                    onChange={(e) => { setData({ ...data, local: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="TEL"
                className="mb-3"
            >

                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.tel}
                    onChange={(e) => { setData({ ...data, tel: e.target.value }) }}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="EMAIL"
                className="mb-3"
            >

                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.email}
                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="LINE"
                className="mb-3"
            >

                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.line}
                    onChange={(e) => { setData({ ...data, line: e.target.value }) }}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="FACEBOOK"
                className="mb-3"
            >

                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.facebook}
                    onChange={(e) => { setData({ ...data, facebook: e.target.value }) }}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="INSTAGRM"
                className="mb-3"
            >

                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.instagrm}
                    onChange={(e) => { setData({ ...data, instagrm: e.target.value }) }}
                />
            </FloatingLabel>

            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/footer/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/footer/",
                            data
                        });
                    }



                }}>
                Edit
            </Button>



        </Container>
    );
}

export default Footer;