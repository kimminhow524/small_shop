import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, minusCount, removeItem } from "../store/module/cartSlice";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });

  let disPatch = useDispatch();

  const deleteCount = (payload) => {
    let count = state.cart.find((x) => x.id === payload).count;
    if (count > 1) {
      disPatch(minusCount(payload));
    } else if (count === 1) {
      disPatch(removeItem(payload));
    }
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>님이 찜한 상품</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {state.cart.map((a, i) => {
          return (
            <tr key={i}>
              <td itemID={a.id}>{i + 1}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td>
                <button
                  onClick={() => {
                    disPatch(plusCount(a.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    deleteCount(a.id);
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default Cart;
