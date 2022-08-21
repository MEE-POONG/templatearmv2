/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page1() {

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
    <Container>
      <div className="p-5">
        <div className="text1 text-center">
          <p className="t1-p1 "> {data.title} </p>

          <p className="t2-p1"> {data.des} </p>

          <Row >
            <Col lg={4} className="p-0 m-0">
              <Image className="img-p1" src={data.img1} />

            </Col>

            <Col lg={4} className="bg-p1 p-0 m-0">

              <p className="my-5 t3-p1">{data.type1}  </p>
              <p className="my-5 t4-p1">{data.name1} </p>
              <p className="my-5 t5-p1">{data.desmanu1} </p>
              <Button class="button-80" role="button">LEARN MORE</Button>

            </Col>

            <Col lg={4} className="p-0 m-0">
              <Image className="img-p1" src={data.img2} />


            </Col>
          </Row>

          <Row>

            <Col lg={4} className="bg-p1 p-0 m-0">

              <p className="my-5 t3-p1">{data.type2}  </p>
              <p className="my-5 t4-p1">{data.name2} </p>
              <p className="my-5 t5-p1">{data.desmanu2} </p>
              <Button class="button-80" role="button">LEARN MORE</Button>

            </Col>

            <Col lg={4} >
              <Image className="img-p1" src={data.img3}/>
            </Col>

            <Col lg={4} className="bg-p1 p-0 m-0">

              <p className="my-5 t3-p1">{data.type3}</p>
              <p className="my-5 t4-p1">{data.name3} </p>
              <p className="my-5 t5-p1">{data.desmanu3}  </p>

              <Button class="button-80" role="button">LEARN MORE</Button>
            </Col>

          </Row>
        </div>
      </div>
    </Container>

  );
}
Page1.layout = IndexPage;