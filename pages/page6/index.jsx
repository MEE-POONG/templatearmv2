/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import { TbSoup } from "react-icons/tb";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page6() {

    const [data, setData] = useState({
        title: "",
        des: "",

 
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page6",
        });

        setData(res.data);
    };


    return (
        <Container>

            <div className="text-center my-5">
                <p className="t1-p4"> {data.title} </p>
                <p className="t2-p4"> {data.des} </p>
            </div>

            <Row className="bg-p1 box-s my-5">
                <Col>
                    <Form className="p-5">
                        <Row>

                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>

                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                            </Col>

                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Label> Number of Persons </Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option> 1 person </option>
                                    <option value="1">2 person</option>
                                    <option value="2">3 person</option>
                                    <option value="3">4 person</option>
                                    <option value="4">5+ person</option>
                                </Form.Select>
                            </Col>

                            <Col lg={4}>

                                <div className="App">
                                    <Form.Label> Date </Form.Label>

                                    <Form.Control type="date"></Form.Control>
                                </div>
                            </Col>

                            <Col lg={4}>

                                <div className="App">
                                    <Form.Label> Time </Form.Label>

                                    <Form.Control type="time"></Form.Control>

                                </div>
                            </Col>



                        </Row>

                    </Form>
                </Col>
                <div className="text-center my-5 ">

                    <Button className="button-13" role="button">RESERVE NOW</Button>

                </div>
            </Row>
        </Container>

    );
}
Page6.layout = IndexPage;