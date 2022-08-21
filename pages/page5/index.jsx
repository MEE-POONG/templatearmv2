/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { TbSoup } from "react-icons/tb";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page5() {
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
        <Container>

            <div className="text-center my-5">
                <p className="t1-p4"> {data.title} </p>
                <p className="t2-p4"> {data.des} </p>
            </div>

            <Row className="text-center">
                <Col lg={4}>
                    <Image className="img-p5" src={data.img1} />
                    <p className="t-n"> {data.name1} </p>
                    <p className="t-des"> {data.desm1} </p>
                </Col>

                <Col lg={4}>
                    <Image className="img-p5" src={data.img2} />
                    <p className="t-n"> {data.name2} </p>
                    <p className="t-des"> {data.desm2} </p>
                </Col>

                <Col lg={4}>
                    <Image className="img-p5" src={data.img3} />
                    <p className="t-n"> {data.name3} </p>
                    <p className="t-des"> {data.desm3} </p>
                </Col>
            </Row>

            <Row className="text-center">
                <Col lg={4}>
                    <Image className="img-p5" src={data.img4} />
                    <p className="t-n"> {data.name4} </p>
                    <p className="t-des"> {data.desm4} </p>
                </Col>

                <Col lg={4}>
                    <Image className="img-p5" src={data.img5} />
                    <p className="t-n"> {data.name5} </p>
                    <p className="t-des"> {data.desm5} </p>
                </Col>

                <Col lg={4}>
                    <Image className="img-p5" src={data.img6} />
                    <p className="t-n"> {data.name6} </p>
                    <p className="t-des"> {data.desm6} </p>
                </Col>
            </Row>

        </Container>

    );
}
Page5.layout = IndexPage;