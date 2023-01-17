import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Header from "./layout/header";
import RoutesMap from "./router";
import { confirmPopup } from "./common/common";

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []); // 본 상품 목록.

  confirmPopup("테스트", "해당 페이지는 테스트용 페이지입니다.");

  return (
    <div className="App">
      <Header></Header>
      <RoutesMap></RoutesMap>
    </div>
  );
}

export default App;
