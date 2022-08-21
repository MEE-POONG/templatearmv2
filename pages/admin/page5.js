import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Page5() {

    const [data, setData] = useState({
        title: "",
        des: "",

        img1: "",
        name1: "",
        desm1: "",

        img2: "",
        name2: "",
        desm2: "",

        img3: "",
        name3: "",
        desm3: "",

        img4: "",
        name4: "",
        desm4: "",

        img5: "",
        name5: "",
        desm5: "",

        img6: "",
        name6: "",
        desm6: "",

    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page5",
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

            <p className='t1-p4'> icon1 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image1"
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
                    value={data.desm1}
                    onChange={(e) => { setData({ ...data, desm1: e.target.value }) }}

                />
            </FloatingLabel>

            <p className='t1-p4'> icon2 </p>

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

            <p className='t1-p4'> icon3 </p>

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

            <p className='t1-p4'> icon4 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image4"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img4}
                    onChange={(e) => { setData({ ...data, img4: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name4"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name4}
                    onChange={(e) => { setData({ ...data, name4: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu4"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm4}
                    onChange={(e) => { setData({ ...data, desm4: e.target.value }) }}

                />
            </FloatingLabel>

            <p className='t1-p4'> icon5 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image5"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img5}
                    onChange={(e) => { setData({ ...data, img5: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name5"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name5}
                    onChange={(e) => { setData({ ...data, name5: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu5"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm5}
                    onChange={(e) => { setData({ ...data, desm5: e.target.value }) }}

                />
            </FloatingLabel>


            <p className='t1-p4'> icon6 </p>

            <FloatingLabel
                controlId="floatingInput"
                label="Image6"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.img6}
                    onChange={(e) => { setData({ ...data, img6: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="Name6"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.name6}
                    onChange={(e) => { setData({ ...data, name6: e.target.value }) }}

                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInput"
                label="DesMenu6"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="aaaaaaa"
                    value={data.desm6}
                    onChange={(e) => { setData({ ...data, desm6: e.target.value }) }}

                />
            </FloatingLabel>



            <Button variant="warning" onClick={
                async () => {

                    if (data._id) {
                        await axios({
                            method: "PUT",
                            url: "/api/page5/" + data._id,
                            data
                        });
                    }
                    else {
                        await axios({
                            method: "POST",
                            url: "/api/page5/",
                            data
                        });
                    }



                }}>
                SAVE
            </Button>



        </Container>
    );
}

export default Page5;