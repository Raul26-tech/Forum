import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import "./ListTools.css";
import swal from 'sweetalert';
import api from "../../Services/API";




function ListTools() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [searchByTags, setSearchByTags] = useState(false);


  //Função para criação do card
  const [tools, setTools] = useState([]);

  const getTools = async () => {
    try {
      const { data } = await api.get("http://localhost:3000/tools");
      if (data) setTools(data);
    } catch (err) {
      swal("Erro", "erro ao retornar a ferramenta ");
    }
  };

  useEffect(() => {
    getTools();
  }, []);

  //Função para deletar o Card 
  const deleteTools = async (id) => {
    try {
      const { data } = await api.delete(`http://localhost:3000/tools/${id}`);
      if (data) getTools();
    } catch (err) {
      swal("Erro", "erro ao retornar a ferramenta ");
    }
  };


  // Função para criação do novo post
  const createTools = async () => {
    const newTools = {
      "title": title,
      "link": "https://github.com/typicode/hotel",
      "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
      "tags": ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
      // Trabalhar com a função split através do espaço
    }

    try {
      const { data } = await api.post("http://localhost:3000/tools", newTools);
      if (data) {
        getTools();
        handleClose();
      }
    } catch (err) {
      swal("Erro", "erro ao retornar a ferramenta ");
      handleClose();
    }

  };

  // Função para pesquisa
  const searchToolsByTitle = async (titleCard) => {
    let str = searchByTags ? "tags_like" : "q";

    try {
      const { data } = await api.get(`http://localhost:3000/tools?${str}=${titleCard}`);
      if (data) setTools(data);
    } catch (err) {
      swal("Erro", "erro ao retornar a ferramenta ");
    }
  };



  /*Função para remover as ferrametas*/
  function alertMessage(id) {



    swal({

      title: "Remove tool",
      icon: "warning",
      text: "Are you sure you want to remove ?",
      buttons: ["Cancel", "yes, remove"],
      dangerMode: "true"
    }).then((willDelete) => {
      if (willDelete) {

        deleteTools(id)

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      }
    });



  }


  return (
    <>

      <Container className="d-flex p-5">
        <Row className="justify-content-center w-100">
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h2>Vuttr</h2>
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
                    onChange={({ target }) => searchToolsByTitle(target.value)}
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
                      onChange={() => setSearchByTags(!searchByTags)}
                      type="checkbox"
                      id="default-checkbox"
                      label="search in tags only"
                    />
                  </div>
                </Form>
              </Col>
              <Col md={2} className="text-end">
                <Button
                  //Criar escutador para adicionar o form
                  onClick={handleShow}
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
                {tools.map((el, indexCard) => (
                  <Card key={indexCard} className="p-3 mb-3">
                    <Row>
                      <Col md={10}>
                        <span className="decoration-name-tools">{el.title}</span>
                      </Col>
                      <Col md={2}>
                        <div className="display-inline-flex btn-romeve">
                          <CloseIcon />
                          <span onClick={() => alertMessage(el.id)}>Remove</span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>{el.description}</Col>
                      <div>
                        {el.tags.map((tag, index) => (
                          <span key={index} className={index > 0 ? "p-2" : ""}>
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


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new tools</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField fullWidth label="Tool name" id="fullWidth" value={title} onChange={({ target }) => setTitle(target.value)} />
          <TextField fullWidth label="Tool link" id="fullWidth" />
          <TextField fullWidth label="Tool description" id="fullWidth" />
          <TextField fullWidth label="Tags" id="fullWidth" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            //Criando escutador para adicionar o form
            onClick={createTools}
            variant="contained"
            color="primary"

          >
            Add tool
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  );
}

export default ListTools;
