/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import IndexPage from "../layouts/IndexPage.js";
import { Container, Row, Tooltip, Card, Button, OverlayTrigger } from 'react-bootstrap';
export default function ReactBootstrap() {
  return (
    <>
      <section className="my-5">
        <Container>
          {/* 1 */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>React Bootstrap</Card.Title>
              <Card.Text>
                React Bootstrap Library มีความหมายตรงตามชื่อของมัน คือ Bootstrap Components ที่สร้างขึ้นด้วย React โดยที่ Bootstrap เป็น Open-Source Toolkit สำหรับการ Develop ด้วย HTML, CSS และ JavaScript อีกทั้งยังเป็น Front-end Component Library ที่ได้รับความนิยมมากที่สุดในโลกอีก
              </Card.Text>
              <Card.Text>
                <Button variant='primary'>Primary</Button>
                {"<Button variant='primary'>Primary</Button>"}
                <br />
                <Button variant='secondary'>Secondary</Button>
                {"<Button variant='secondary'>Secondary</Button>"}
                <br />
                <Button variant='success'>Success</Button>
                {"<Button variant='success'>Success</Button>"}
                <br />
                <Button variant='warning'>Warning</Button>
                {"<Button variant='warning'>Warning</Button>"}
                <br />
                <Button variant='danger'>Danger</Button>
                {"<Button variant='danger'>Danger</Button>"}
                <br />
                <Button variant='info'>Info</Button>
                {"<Button variant='info'>Info</Button>"}
                <br />
                <Button variant='light'>Light</Button>
                {"<Button variant='dark'>Dark</Button>"}
                <br />
                <Button variant='link'>Link</Button>
                {"<Button variant='link'>Link</Button>"}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip">
                  Simple tooltip
                </Tooltip>}
              >
                <Button variant="success">Hover me to see</Button>
              </OverlayTrigger>
              {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="secondary">Tooltip on {placement}</Button>
                </OverlayTrigger>
              ))}

            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
}

ReactBootstrap.layout = IndexPage;