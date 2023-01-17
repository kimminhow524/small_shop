import axios from "axios";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../assets/js/dummyData";

export default function Main() {
  let [shoes, setShoes] = useState(data);
  const scrollingOnData = () => {
    axios
      .get(`${process.env.REACT_APP_STUDY_API_SERVER}/shop/data2.json`)
      .then((result) => {
        let copy = [...shoes, ...result.data];
        setShoes(copy);
        console.log(shoes);
      })
      .catch(() => {
        console.log("실패함");
      });
  };
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Card key={i} shoes={shoes[i]} i={i} />;
          })}
        </Row>
      </Container>
    </>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <Col
      className="col-md-4"
      onClick={() => {
        navigate(`detail/${props.shoes.id}`);
      }}
    >
      <img
        src={
          props.shoes.image
            ? "../assets/img/noimage.jpg"
            : `${process.env.REACT_APP_STUDY_API_SERVER}/shop/shoes${
                props.i + 1
              }.jpg`
        }
        width="80%"
        alt="shoes"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}
