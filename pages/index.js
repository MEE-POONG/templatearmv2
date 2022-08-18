/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function Index() {
  return (
    <>
      <section className="my-5">
        <Container>
          <Row>
            <Col xxl="2" xl="2" lg="3" md="4" sm="6" xs="6" className="col-xxs-1" >
              <Link href={"/html"}>
                <Card className="mb-3">
                  <Card.Img variant="top" src="./img/home/html.png" />
                  <Card.Body>
                    <Card.Title>html แบบเด็กๆ</Card.Title>
                    <Card.Text>
                      การใช้เปิดปิดแท็กพื้นของ html
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xxl="2" xl="2" lg="3" md="4" sm="6" xs="6" className="col-xxs-1"  >
              <Link href={"/css"}>
                <Card className="mb-3">
                  <Card.Img variant="top" src="./img/home/css.png" />
                  <Card.Body>
                    <Card.Title>css แบบเด็กๆ</Card.Title>
                    <Card.Text>
                      ตกแต่ง html
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xxl="2" xl="2" lg="3" md="4" sm="6" xs="6" className="col-xxs-1" >
              <Link href={"/scss"}>
                <Card className="mb-3">
                  <Card.Img variant="top" src="./img/home/scss.png" />
                  <Card.Body>
                    <Card.Title>sass แบบเด็กๆ</Card.Title>
                    <Card.Text>
                      ตกแต่ง html เขียนรูปแบบ js ได้
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col xxl="2" xl="2" lg="3" md="4" sm="6" xs="6" className="col-xxs-1" >
              <Link href={"/react-bootstrap"}>
                <Card className="mb-3">
                  <Card.Img variant="top" src="./img/home/bootstrap.png" />
                  <Card.Body>
                    <Card.Title>React Bootstrap</Card.Title>
                    <Card.Text>
                      Bootstrap Components ที่สร้างขึ้นด้วย React โดยที่ Bootstrap เป็น Open-Source Toolkit สำหรับการ Develop ด้วย HTML, CSS และ JavaScript
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
Index.layout = IndexPage;