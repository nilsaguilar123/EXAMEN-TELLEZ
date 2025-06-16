import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const cursos = [
  {
    titulo: "Caporales",
    descripcion: "Danza energética con trajes coloridos y ritmo rápido.",
    imagen: "https://elrinconboliviano.com/wp-content/uploads/2020/11/caporales-tradicional-de-bolivia_700x500.jpg",
    precio: "100 Bs",
  },
  {
    titulo: "Morenada",
    descripcion: "Danza tradicional con máscaras y pasos lentos.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8baIn983NApRJs17WZV8kcd_PDZg0hkCu9pKL53-NTLQOGtoku8oa4HaelOF-hY7m9BE&usqp=CAU",
    precio: "220Bs",
  },
  {
    titulo: "Tinku",
    descripcion: "Danza de combate ceremonial con raíces andinas.",
    imagen: "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2025/2/11/tinkus_11.jpg?itok=h-Blq3ZN",
    precio: "200Bs",
  },
];

function Cursos() {
  const [modalShow, setModalShow] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const handleShow = (curso) => {
    setCursoSeleccionado(curso);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  return (
    <div className="text-dark">
      <h2 className="mb-4 text-center text-white">Oferta de Cursos</h2>
      <div className="row">
        {cursos.map((curso, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="shadow">
              <Card.Img variant="top" src={curso.imagen} />
              <Card.Body>
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Text>{curso.descripcion}</Card.Text>
                <Button variant="success" onClick={() => handleShow(curso)}>
                  Ver Precio
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {cursoSeleccionado && (
        <Modal show={modalShow} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{cursoSeleccionado.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Precio:</strong> {cursoSeleccionado.precio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Cursos;

