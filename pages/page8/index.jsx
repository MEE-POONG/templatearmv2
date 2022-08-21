/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image, Carousel, Form } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page8() {

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
        <>
            <Container >
                <div className="text-center my-5">
                    <p className="t1-p4"> {data.title} </p>
                </div>

                <Form className="p-5 my-5 bg-p1 box-s ">
                    <Row>

                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="text">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email" placeholder="" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Col>
                        <div className="text-center my-5 ">

                            <Button className="button-13" role="button">SEND MESSAGE</Button>
                        </div>
                    </Row>

                </Form>
            </Container>
<div className="map">
    <Image src={data.map}/>
</div>
        </>
    );
}
Page8.layout = IndexPage;