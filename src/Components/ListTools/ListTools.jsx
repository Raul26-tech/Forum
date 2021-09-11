import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./ListTools.css";

function ListTools() {
  
  const data = [
    {
      id: 1,
      title: "Notion",
      link: "https://notion.so",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar",
      ],
    },
    {
      id: 2,
      title: "json-server",
      link: "https://github.com/typicode/json-server",
      description:
        "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      tags: ["api", "json", "schema", "node", "github", "rest"],
    },
    {
      id: 3,
      title: "fastify",
      link: "https://www.fastify.io/",
      description:
        "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      tags: ["web", "framework", "node", "http2", "https", "localhost"],
    },
  ];

  return (
    <Container className="d-flex p-5">
      <Row className="justify-content-center w-100">
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h2>Vutter</h2>
              <p>Very Useful Tools To Remember</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <Form>
                <div key="default-checkbox" className="mt-1">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="search in tags only"
                  />
                </div>
              </Form>
            </Col>
            <Col md={2} className="text-end">
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {data.map((el) => (
                <Card className="p-3 mb-3">
                  <Row>
                    <Col md={10}>
                      <span className="decoration-name-tools">{el.title}</span>
                    </Col>
                    <Col md={2}>
                      <div className="display-inline-flex btn-romeve">
                        <CloseIcon />
                        <span>Remove</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>{el.description}</Col>
                    <div>
                      {el.tags.map((tag, index) => (
                        <span className={index > 0 ? "p-2" : ""}>
                          <strong>#{tag}</strong>
                        </span>
                      ))}
                    </div>
                  </Row>
                </Card>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ListTools;
