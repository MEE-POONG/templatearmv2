/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page3() {

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
        <Container>
            <div className="text-center p-5 bg-p1">
                <p className="t1-p1"> {data.title} </p>
                <Row>
                    <Col className="p-5">

                        <Image className="img1-p3" src={data.img1} />

                        <p className="t2-p3"> {data.name1} </p>
                        <p className="t5-p1"> {data.rank1}  </p>
                        <p className="t3-p3"> {data.des1} </p>
                        <p className="t3-p3"> {data.desm1} </p>

                        <FaFacebookF className="icon-p3" size={20} />&nbsp;&nbsp;<FaTwitter className="icon-p3" size={20} />&nbsp;&nbsp; <FaInstagram className="icon-p3" size={20} />
                    </Col>

                    <Col className="p-5">

                        <Image className="img1-p3" src={data.img2} />

                        <p className="t2-p3"> {data.name2} </p>
                        <p className="t5-p1"> {data.rank2}  </p>
                        <p className="t3-p3"> {data.des2} </p>
                        <p className="t3-p3"> {data.desm2} </p>
                        <FaFacebookF className="icon-p3" size={20} />&nbsp;&nbsp;<FaTwitter className="icon-p3" size={20} />&nbsp;&nbsp; <FaInstagram className="icon-p3" size={20} />


                    </Col>
                </Row>

            </div>
        </Container>

    );
}
Page3.layout = IndexPage;