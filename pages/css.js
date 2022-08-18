/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function Css() {
  return (
    <>
      <section className="my-5">
        <Container>
          {/* 1 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Css</Card.Title>
              <Card.Text>
                {"const mystyle = {"}
                <br />
                &nbsp; &nbsp;{"color: " + '"' + "white" + '"' + ","}
                <br />
                &nbsp; &nbsp;{"backgroundColor: " + '"' + "DodgerBlue" + '"' + ","}
                <br />
                &nbsp; &nbsp;{"padding: " + '"' + "10px" + '"' + ""},
                <br />
                &nbsp; &nbsp;{"fontFamily: " + '"' + "Arial" + '"' + ""}
                <br />
                 &nbsp;{"};"}
                <h1 >Hello Style!</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
}
Css.layout = IndexPage;
