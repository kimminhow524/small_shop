import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../views/login";
import Main from "../views/main";

const Cart = lazy(() => import("../views/cart"));
const Detail = lazy(() => import("../views/detail"));

export default function RoutesMap() {
  return (
    <Suspense fallback={<>onLoad</>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<>it's not naythings</>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}
