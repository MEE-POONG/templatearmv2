/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Page1 from "../container/page1/page1.jsx";
import Page2 from "../container/page2/page2.jsx";
import Page3 from "../container/page3/page3.jsx";
import Page4 from "../container/page4/page4.jsx";
import Page5 from "../container/page5/page5.jsx";
import Page6 from "../container/page6/page6.jsx";
import Page7 from "../container/page7/page7.jsx";
import Page8 from "../container/page8/page8.jsx";



export default function Index() {
  const [data, setData] = useState({
    title: "",
  });

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "/api/banner-home",
    });

    setData(res.data);
  };

  return (
    <>

      <div className="bg-img1">
        <Container className="h-100">
          <div className="dis1">
            <div className="text1 text-center">
              <p className="t1-h P-5"> {data.title} </p>

              <Button className="custom-btn btn-11">  RESERVE A TABLE </Button>
            </div>
          </div>
        </Container>
      </div>

      <div class="section one" id="section1">
        <Page1 />
      </div>

      <div class="section two" id="section2">
        <Page2 />
      </div>

      <div class="section three" id="section3">
        <Page3 />
      </div>

      <div class="section four" id="section4">
        <Page4 />
      </div>

      <div class="section five" id="section5">
        <Page5 />
      </div>

      <div class="section six" id="section6">
        <Page6 />
      </div>

      <div class="section seven" id="section7">
        <Page7 />
      </div>

      <div class="section eig" id="section8">
        <Page8 />
      </div>


    </>
  );
}
Index.layout = IndexPage;