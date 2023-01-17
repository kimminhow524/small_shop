import axios from "axios";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { LoginPop } from "../common/common";

export default function Header() {
  let [login] = useState(false);
  let navigate = useNavigate();
  let userName = useQuery(
    "userName",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        return a.data;
      })
    // { staleTime: 1 }
  );
  const redirectLogin = () => {
    LoginPop();
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                let tmpstore = localStorage.getItem("watched");
                tmpstore = JSON.parse(tmpstore);
                navigate(`/detail/${tmpstore[tmpstore.length - 1]}`);
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                !login ? redirectLogin() : navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/login");
              }}
              disabled={login}
            >
              Login
            </Nav.Link>
          </Nav>
          <Nav
            className="ms-auto text-white"
            onClick={() => {
              if (!login) navigate("/login");
            }}
          >
            {login ? `Hello ${userName.data.name}` : "Login First"}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
