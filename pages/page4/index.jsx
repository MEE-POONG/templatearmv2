/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page4() {


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
        <Container>
            <div className="text-center my-5">
                <p className="t1-p4"> {data.title} </p>
                <p className="t2-p4"> {data.des} </p>
            </div>
            <Row className="justify-content-md-center">

                <Col xs="auto" lg="2" >
                    <a>
                        <span>B</span>
                        <span>R</span>
                        <span>E</span>
                        <span>A</span>
                        <span>K</span>
                        <span>F</span>
                        <span>A</span>
                        <span>S</span>
                        <span>T</span>
                    </a>
                </Col>

                <Col md="auto" >
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a>
                        <span>B</span>
                        <span>R</span>
                        <span>U</span>
                        <span>N</span>
                        <span>C</span>
                        <span>H</span>
                    </a>
                </Col>

                <Col xs="auto" lg="2" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                    <a>
                        <span>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>N</span>
                        <span>E</span>
                        <span>R</span>
                    </a>
                </Col>
            </Row>
                <Row  className="justify-content-md-center my-5 line">

                    <Col lg={4}>
                        <Image className="img-p4" src={data.img} />
                    </Col>

                    <Col lg={4}>
                        <p className="t-n"> {data.name} </p>
                        <p className="t-des"> {data.desm} </p>
                    </Col>

                    <Col xs="auto" lg={4}>
                        <p className="t-p"> {data.pice} </p>
                    </Col>

                </Row>

                <Row  className="justify-content-md-center my-5 line">

                    <Col lg={4}>
                        <Image className="img-p4" src={data.img} />
                    </Col>

                    <Col lg={4}>
                        <p className="t-n"> {data.name2} </p>
                        <p className="t-des"> {data.desm2} </p>
                    </Col>

                    <Col xs="auto" lg={4}>
                        <p className="t-p"> {data.pice2} </p>
                    </Col>

                </Row>

                <Row  className="justify-content-md-center my-5 line">

                    <Col lg={4}>
                        <Image className="img-p4" src={data.img3} />
                    </Col>

                    <Col lg={4}>
                        <p className="t-n"> {data.name3} </p>
                        <p className="t-des"> {data.desm3} </p>
                    </Col>

                    <Col xs="auto" lg={4}>
                        <p className="t-p"> {data.pice3} </p>
                    </Col>

                </Row>
        
        </Container>

    );
}
Page4.layout = IndexPage;