/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function Scss() {
  return (
    <>
      <section className="my-5">
        <Container>
          {/* 1 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>1. {"<!DOCTYPE html>"}</Card.Title>
              <Card.Text className="test">
                {"import React from 'react';"}
                <br />
                {"import ReactDOM from 'react-dom';"}
                <br />
                {"import './my-sass.scss';"}
                <br />
                {"const Header = () => {"}
                <br />
                &nbsp;{"return ("}
                <br />
                &nbsp; &nbsp;{"<>"}
                <br />
                &nbsp; &nbsp; &nbsp;{"<h1>Hello Style!</h1>"}
                <br />
                &nbsp; &nbsp; &nbsp;{"<p>Add a little style!.</p>"}
                <br />
                &nbsp; &nbsp;{"</>"}
                <br />
                &nbsp;{" );"}
                <br />
                {"}"}
                <br />
                {"ReactDOM.render(<Header />, document.getElementById('root'));"}
                <br />
                <h1>Hello Style!</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
}
Scss.layout = IndexPage;
