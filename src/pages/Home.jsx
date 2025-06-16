import React from "react";
import Accordion from "react-bootstrap/Accordion";

const danzas = [
  "Caporales - La Paz",
  "Morenada - Oruro",
  "Tinku - Potosí",
  "Cueca - Chuquisaca",
  "Taquirari - Santa Cruz",
];

function Home() {
  return (
    <div className="text-dark bg-light p-4 rounded shadow">
      <h2 className="mb-4 text-center">Danzas Originales De La Academia REAL MADRID</h2>
      <Accordion>
        {danzas.map((danza, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>{danza.split(" - ")[0]}</Accordion.Header>
            <Accordion.Body>
              Esta danza proviene de la región de <strong>{danza.split(" - ")[1]}</strong>.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Home;
