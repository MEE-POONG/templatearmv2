import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Page1() {

    const [data, setData] = useState({
        title: "",
        des: "",

        type1: "",
        name1: "",
        desmanu1: "",
        img1: "",

        type2: "",
        name2: "",
        desmanu2: "",
        img2: "",

        type3: "",
        name3: "",
        desmanu3: "",
        img3: "",

    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page1",
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
            <section>
                <p className="t1-p4"> Menu1 </p>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Img1"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.img1}
                        onChange={(e) => { setData({ ...data, img1: e.target.value }) }}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Type1"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.type1}
                        onChange={(e) => { setData({ ...data, type1: e.target.value }) }}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Name1"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.name1}
                        onChange={(e) => { setData({ ...data, name1: e.target.value }) }}
                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="DesMenu1"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.desmanu1}
                        onChange={(e) => { setData({ ...data, desmanu1: e.target.value }) }}
                    />
                </FloatingLabel>
            </section>
            
            <section>
                <p className="t1-p4"> Menu2 </p>


                <FloatingLabel
                    controlId="floatingInput"
                    label="Img2"
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
                    label="Type2"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.type2}
                        onChange={(e) => { setData({ ...data, type2: e.target.value }) }}
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
                        value={data.desmanu2}
                        onChange={(e) => { setData({ ...data, desmanu2: e.target.value }) }}
                    />
                </FloatingLabel>
            </section>

            <section>
                <p className="t1-p4"> Menu3 </p>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Img3"
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
                    label="Type3"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.type3}
                        onChange={(e) => { setData({ ...data, type3: e.target.value }) }}
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
                        value={data.desmanu3}
                        onChange={(e) => { setData({ ...data, desmanu3: e.target.value }) }}
                    />
                </FloatingLabel>
            </section>
            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/page1/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/page1/",
                            data
                        });
                    }



                }}>
                SAVE
            </Button>



        </Container>
    );
}

export default Page1;