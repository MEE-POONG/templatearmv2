import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Page3() {

    const [data, setData] = useState({
        title: "",

        img1: "",
        des1: "",
        name1: "",
        rank1: "",
        desm1: "",

        img2: "",
        des2: "",
        name2: "",
        rank2: "",
        desm2: "",

    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page3",
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

            <section>
                <p className='t1-p4'> คนที่ 1 </p>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Image"
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
                    label="Name"
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
                    label="Rank"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.rank1}
                        onChange={(e) => { setData({ ...data, rank1: e.target.value }) }}

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
                        value={data.des1}
                        onChange={(e) => { setData({ ...data, des1: e.target.value }) }}

                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Desm"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.desm1}
                        onChange={(e) => { setData({ ...data, desm1: e.target.value }) }}

                    />
                </FloatingLabel>
            </section>

            <section>
                <p className='t1-p4'> คนที่ 2 </p>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Image"
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
                    label="Name"
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
                    label="Rank"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.rank2}
                        onChange={(e) => { setData({ ...data, rank2: e.target.value }) }}

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
                        value={data.des2}
                        onChange={(e) => { setData({ ...data, des2: e.target.value }) }}

                    />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Desm"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="aaaaaaa"
                        value={data.desm2}
                        onChange={(e) => { setData({ ...data, desm2: e.target.value }) }}

                    />
                </FloatingLabel>
            </section>




            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/page3/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/page3/",
                            data
                        });
                    }



                }}>
                SAVE
            </Button>



        </Container>
    );
}

export default Page3;