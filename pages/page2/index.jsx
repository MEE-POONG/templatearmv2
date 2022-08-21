/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page2() {

    const [data, setData] = useState({
        title: "",
        des: "",
        des2:"",
        img: "",
    
      });
    
      useEffect(() => {
        getData()
      }, [])
    
      const getData = async () => {
        const res = await axios({
          method: "GET",
          url: "/api/page2",
        });
    
        setData(res.data);
      };

    return (
        <>
            <Container className="h-100">
                <div className="dis1">
                    <div className="text1 ">
                        <p className="t1-p1 P-5"> {data.title}  </p>

                        <p className="t2-p1"> {data.des}  </p>

                        <p className="t2-p1"> {data.des2} </p>
                    </div>
                </div>
            </Container>
            <Image src={data.img} />
        </>
    );
}
Page2.layout = IndexPage;