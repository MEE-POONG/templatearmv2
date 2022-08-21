import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Page4() {

    const [data, setData] = useState({
        title: "",
        des: "",

        img: "",
        name: "",
        pice: "",
        desm: "",

        img2: "",
        name2: "",
        pice2: "",
        desm2: "",

        img3: "",
        name3: "",
        pice3: "",
        desm3: "",
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page4",
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
                label="Des"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.des}
                    onChange={(e) => { setData({ ...data, des: e.target.value }) }}

                />
            </FloatingLabel>

            <p className='t1-p4'>MENU 1 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img}
                    onChange={(e) => { setData({ ...data, img: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name}
                    onChange={(e) => { setData({ ...data, name: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm}
                    onChange={(e) => { setData({ ...data, desm: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Pice"
                className="mb-3"
            >
                <Form.Control
                    type="number"
                    placeholder="aaaaaaa"
                    value={data.pice}
                    onChange={(e) => { setData({ ...data, pice: e.target.value }) }}

                />
            </FloatingLabel>

            <p className='t1-p4'>MENU 2 </p>
            <FloatingLabel
                controlId="floatingInput"
                label="Image2"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img2}
                    onChange={(e) => { setData({ ...data, img2: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name2"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name2}
                    onChange={(e) => { setData({ ...data, name2: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu2"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm2}
                    onChange={(e) => { setData({ ...data, desm2: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Pice2"
                className="mb-3"
            >
                <Form.Control
                    type="number"
                    placeholder="aaaaaaa"
                    value={data.pice2}
                    onChange={(e) => { setData({ ...data, pice2: e.target.value }) }}

                />
            </FloatingLabel>


            <p className='t1-p4'>MENU 3 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image3"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img3}
                    onChange={(e) => { setData({ ...data, img3: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name3"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name3}
                    onChange={(e) => { setData({ ...data, name3: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu3"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm3}
                    onChange={(e) => { setData({ ...data, desm3: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Pice3"
                className="mb-3"
            >
                <Form.Control
                    type="number"
                    placeholder="aaaaaaa"
                    value={data.pice3}
                    onChange={(e) => { setData({ ...data, pice3: e.target.value }) }}

                />
            </FloatingLabel>




            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/page4/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/page4/",
                            data
                        });
                    }



                }}>
                SAVE
            </Button>



        </Container>
    );
}

export default Page4;