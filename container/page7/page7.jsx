/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page7() {

    const [data, setData] = useState({
        title: "",
        desban: "",
        img: "",
        name: "",
        des: "",
       
        desban2: "",
        img2: "",
        name2: "",
        des2: "",

        desban3: "",
        img3: "",
        name3: "",
        des3: "",


    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios({
            method: "GET",
            url: "/api/page7",
        });

        setData(res.data);
    };

    return (
        <>
            <Container >
                <div className="text-center my-5 ">
                    <p className="t1-p4">{data.title}</p>
                </div>
                <Carousel variant="dark my-5 text-center">
                    <Carousel.Item>

                        <p className="t-des">{data.desban}</p>
                        <Image className="img1-p3 my-3" src={data.img} />
                        <p className="my-3 t-n">{data.name}</p>
                        <p className="my-3 t-des">{data.des}</p>
                        <p className="my-3">..</p>
                    </Carousel.Item>

                    <Carousel.Item>

                        <p className="t-des">{data.desban2}</p>
                        <Image className="img1-p3 my-3" src={data.img2} />
                        <p className="my-3 t-n">{data.name2}</p>
                        <p className="my-3 t-des">{data.des2}</p>
                        <p className="my-3">..</p>
                    </Carousel.Item>

                    <Carousel.Item>

                        <p className="t-des">{data.desban3}</p>
                        <Image className="img1-p3 my-3" src={data.img3} />
                        <p className="my-3 t-n">{data.name3}</p>
                        <p className="my-3 t-des">{data.des3}</p>
                        <p className="my-3">..</p>
                    </Carousel.Item>

                </Carousel>
            </Container>

        </>
    );
}
Page7.layout = IndexPage;