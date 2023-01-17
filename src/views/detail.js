import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { flushSync } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, plusCount } from "../store/module/cartSlice";
import data from "../assets/js/dummyData";
import { confirmPopup } from "../common/common";

const Detail = () => {
  let { id } = useParams();
  let [fade2, setFade2] = useState("");
  let [tab, setTab] = useState(0);
  let disPatch = useDispatch();
  const shoes = data.find((x) => x.id === parseInt(id));
  let state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    let item = localStorage.getItem("watched");
    item = JSON.parse(item);
    if (item.includes(shoes.id)) {
      item = item.filter((x) => x !== shoes.id);
    }
    item.push(shoes.id);
    item = new Set(item);
    item = Array.from(item);
    localStorage.setItem("watched", JSON.stringify(item));
  }, [shoes]); // 본 상품 목록.

  const setObject = () => {
    if (state.cart.find((x) => x.id === shoes.id)) {
      confirmPopup("추가완료", "해당상품을 하나 더 추가했습니다!");
      disPatch(plusCount(shoes.id));
    } else {
      disPatch(addItem({ id: shoes.id, name: shoes.title, count: 1 }));
      confirmPopup("추가완료", "해당상품이 장바구니에 추가 되었습니다!");
    }
  };

  return (
    <div className={"container start " + fade2}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            width="100%"
            alt="ima"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.title}</p>
          <p>{shoes.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setObject();
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="tab">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};
function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      flushSync(() => {
        setFade("end");
      });
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
